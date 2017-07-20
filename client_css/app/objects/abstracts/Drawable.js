export default class Drawable{
    draw(){
        this.$el.style.transform = `translate(${this.x}px,${this.y}px) rotate(${this.angle}deg)`;
    }
}