import io from "socket.io-client";
import "./styles/index.scss";

import Player from "./objects/Player";
import Enemy from "./objects/Enemy";
import moment from "moment";

export default class Game {

    constructor($el, socketURL) {
        this.frames = 0;
        this.initTime= null;
        this.$el = $el;
        this.$ingame = this.$el.querySelector("#ingame");
        this.enemySpeed = -3;
        
        this.$counter = document.createElement("span");
        this.$counter.className="counter";
        this.$ingame.appendChild(this.$counter);


        this.player = new Player(this);
        this.luminosity = null;
        this.objects = [this.player];

        this.socketConnected = false;
        this.socket = io(socketURL);
        this.createEnemyRateFrame = 260;
        this._setWidthAndHeight();
    }
    init() {
        this._prepareSocket();
        this._bindEvents();
        this._createEnemy();
    }
    
    start(){
        this.changeScreen("ingame");
        setTimeout(_=>{
            this._loop();
        },1000);
    }
    onFinish(){
        this.changeScreen("start");
        this.$el.querySelector("#start .btn-start").innerHTML="Restart";
    }
    reset(){
        this.player = new Player(this);
        this.player.draw();
        this.frames = 0;
        this.initTime= null;
        this.enemySpeed = -3;
        
        while(this.objects.length){
            this.objects[0].remove();
        }
        this.objects = [this.player];
    }
    restart(){
        this.reset();
        this.start();
    }
    _createEnemy(){
        const speed = this.enemySpeed + (Math.random() * this.enemySpeed/2);
        var enemy = new Enemy(this,speed);
        this.objects.push(enemy);
    }
    _loop() {
        this.initTime = new Date();
        const go = ev => {
            const { objects } = this;
            this.frames++;
            for (var i = 0; i < objects.length; i++) {
                objects[i].update();
            }
            for (var i = 0; i < objects.length; i++) {
                objects[i].draw();
            }
            if (!this.paused && !this._isFinished()){
                requestAnimationFrame(go);
            }else{
                this.onFinish();
            }
            this.update();
        }
        go();
    }
    update(){
        if(this.frames % this.createEnemyRateFrame == 0)
                this._createEnemy();
        const count = moment(new Date() - this.initTime).format("m:s").replace(/^0:/,'');
        this.$counter.innerHTML = count;

        
        if(this.frames % (5*60) == 0 && this.frames != 0){
            this.levelUp();
        }
    }
    levelUp(){
        this.createEnemyRateFrame = parseInt(0.8 * this.createEnemyRateFrame);
        this.enemySpeed *= 1.08;  
        console.log("levelUp!");
        // debugger;
    }
    _isFinished(){
        return this.player.died;
        // return false;
    }
    changeScreen(id){
        let screens = this.$el.querySelectorAll(".screen");
        for (var i = 0; i < screens.length; i++) {
            var screen = screens[i];
            if(screen.id != id){
                screen.classList.remove("active");
            }
            else{
                screen.classList.add("active");
            }
        }
    }
    _setWidthAndHeight(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    _bindEvents() {
        window.addEventListener("resize", ev=>{
            this._setWidthAndHeight();
        });
        this.$el.querySelector(".btn-start").addEventListener("click", ev=>{
            if(this.player.died){
                this.restart();
            }else{
                this.start();
            }

        });
    }
    _prepareSocket() {
        const { socket } = this;
        socket.on("connect", this._onSocketConnected.bind(this));
        socket.on("luminosity", this._onLuminosityReceived.bind(this));
    }
    _onSocketConnected() {
        this.socketConnected = true;
    }
    _onLuminosityReceived(data) {
        this.luminosity = data;
    }

}