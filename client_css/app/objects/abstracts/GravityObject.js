import Drawable from "./Drawable";

export default class GravityObject extends Drawable{
    constructor(gravity,$el,stepX,stepY){
        super($el);
        this.stepAngle = 0;
        this.angle = 0;
        this.gravity = gravity;
        this.stepX = stepX;
        this.stepY = stepY;
    }
    update() {
        this.angle += this.stepAngle;
        this.stepY += this.gravity;
        this.y += this.stepY;
        this.x += this.stepX;
    }
    remove(){
        const index = this.game.objects.indexOf(this);
        this.game.objects.splice(index,1);
        this.$el.remove();
    }
}
