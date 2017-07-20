import io from "socket.io-client";
import "./styles/index.scss";
import Player from "./objects/Player";

export default class Game {

    constructor($el, socketURL) {
        this.frames = 0;
        this.$el = $el;
        this.$player = new Player(this.$el.querySelector("#Player"),this);
        this.luminosity = null;
        this.objects = [this.$player];

        this.socketConnected = false;
        this.socket = io(socketURL);
    }
    init() {
        this.prepareSocket();
        this.bindEvents();
        this.loop();
    }
    loop() {
        const go = ev => {
            const { objects } = this;
            this.frames++;
            for (var i = 0; i < objects.length; i++) {
                objects[i].update();
            }
            for (var i = 0; i < objects.length; i++) {
                objects[i].draw();
            }
            if (!this.paused && !this.isFinished())
                requestAnimationFrame(go);
        }
        go();
    }
    isFinished(){
        return this.$player.died;
    }
    bindEvents() {
        
    }
    prepareSocket() {
        const { socket } = this;
        socket.on("connect", this.onSocketConnected.bind(this));
        socket.on("luminosity", this.onLuminosityReceived.bind(this));
    }
    onSocketConnected() {
        this.socketConnected = true;
    }
    onLuminosityReceived(data) {
        this.luminosity = data;
    }

}