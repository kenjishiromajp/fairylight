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
    isCollidedWith(obj){
        if(!obj instanceof Drawable)
            throw new Error("You must to pass a Drawable/Gravity object");
        if(this == obj)
            return false;

        let a = {
            y1: this.y,
            y2: this.y + this.height,
            x1: this.x,
            x2: this.x + this.width,
        };
        let b = {
            y1: obj.y,
            y2: obj.y + obj.height,
            x1: obj.x,
            x2: obj.x + obj.width,
        };
        // debugger;
        return !((a.x1 > b.x2 || a.x2 < b.x1) || (a.y1 > b.y2 || a.y2 < b.y1));
    }
}
