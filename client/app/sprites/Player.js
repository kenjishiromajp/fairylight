import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.anchor.setTo(0.5);
        game.physics.arcade.enable(this);
        
        this.body.bounce.y = 0.2;
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 400;
        this.populateEvents();
    }
    populateEvents(){
        var cursors = this.game.input.keyboard.createCursorKeys();
        console.log(cursors);
        debugger;
    }
    update() {
        // this.y += 2 ;
    }
}