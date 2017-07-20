import Drawable from "./Drawable";

export default class GravityObject extends Drawable{
    constructor(gravity){
        super();
        this.stepAngle = 0;
        this.angle = 0;
        this.gravity = gravity;
    }
    update() {
        this.angle += this.stepAngle;
        this.stepY += this.gravity;
        this.y += this.stepY;
        this.x += this.stepX;
    }
}
