import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.anchor.setTo(0.5);
        game.physics.arcade.enable(this);
        
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 1800;
        this.cursors = null;
        this.populateEvents();
    }
    populateEvents(){
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    update() {
        if(this.cursors.up.isDown){
            this.body.velocity.y -= 150;
            this.body.angularAcceleration = -55;
        }
        if(this.cursors.down.isDown){
            this.body.angularAcceleration = 55;
        }
    }
}