export default class Drawable{
    constructor($el){
        this.$el = $el;
    }
    draw(){
        this.$el.style.transform = `translate(${this.x}px,${this.y}px) rotate(${this.angle}deg)`;
    }
}