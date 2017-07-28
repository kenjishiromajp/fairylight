import GravityObject from "./abstracts/GravityObject";
import EnemySVG from "!raw-loader!../../assets/imgs/Enemy.svg";
const dp = new DOMParser();

export default class Enemy extends GravityObject{
    constructor(game,stepX) {
        let $el = dp.parseFromString(EnemySVG,"text/html").querySelector("body").children[0];
        super(0,$el,stepX,0);
        this.game = game;

        this.game.$ingame.appendChild(this.$el);
        
        this.height = 80;
        this.width = 80;

        this.x = this.game.width;
        this.y = Math.floor(Math.random()*(this.game.height - this.height));

        this.draw();
    }
    update(){
        super.update();
        if((this.x + this.width) < 0)
            this.remove();
    }
}