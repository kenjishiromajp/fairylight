import GravityObject from "./abstracts/GravityObject";

export default class Player extends GravityObject {
    constructor($el,game) {
        const gravity = 0.8;
        super(gravity);
        this.game = game;
        this.$el = $el;
        this.$body = null;
        this.height = null;
        this.width = null;
        this.died = false;
        this.luminosityPower = null;

        this.x = 100;
        this.y = 300;
        this.maxStepY = 20;
        this.minStepY = -20;
        this.stepX = 0;
        this.stepY = -5;

        this.preparePlayer();
    }
    preparePlayer() {
        this.$body = this.$el.querySelector(".body");
        
        const compensation_x = parseInt(this.$body.getBoundingClientRect().left) - parseInt(this.$el.getBoundingClientRect().left);
        const compensation_y = parseInt(this.$body.getBoundingClientRect().top) - parseInt(this.$el.getBoundingClientRect().top);
        
        this.height = parseInt(this.$body.getBoundingClientRect().height);
        this.width = parseInt(this.$body.getBoundingClientRect().width);

        this.$el.style.left =  -compensation_x;
        this.$el.style.top = -compensation_y;
        
        this.draw();
    }
    update() {
        super.update();
        this.calculateLuminosityPower();

        this.stepY -= this.luminosityPower;

        this.stepY = (this.stepY > this.maxStepY)? this.maxStepY : this.stepY;
        this.stepY = (this.stepY < this.minStepY)? this.minStepY : this.stepY;
        this.y = (this.y < 0)? 0: this.y;

        this.angle = this.stepY * 1.7;
        this.died = this.hitTheCorner();
    }
    draw(){
        super.draw();
        const percentage = (this.luminosityPower+1)/2;
        this.$el.querySelector("#Player .body-inner").style.fill = `rgba(205, 255, 249,${percentage})`;
    }
    calculateLuminosityPower(){
        const maxLux = 800;
        const minLux = 400;
        const diff = maxLux - minLux;
        var luxIntensityPercentage = (this.game.luminosity - minLux) / diff;
        // luxIntensityPercentage -= 0.5;
        // luxIntensityPercentage *= 2;
        
        const luxIntensity = luxIntensityPercentage * 1.4;
        this.luminosityPower = luxIntensity;
    }
    hitTheCorner(){
        return (this.y+this.height) >  this.game.$el.offsetHeight;
    }
}