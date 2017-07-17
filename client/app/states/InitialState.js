/* globals __DEV__ */
import Phaser from 'phaser';
import Player from '../sprites/Player';

export default class extends Phaser.State {
    init() { }
    preload() {
        this.load.image('Player', require('../sprites/Player.svg'));
        this.load.image('Background', require('../backgrounds/background.svg'));
        this.load.image('FrontBackground', require('../backgrounds/front_background.svg'));
    }
    create() {

        this.Background = this.add.tileSprite(0, 0, this.world.width, this.world.height, "Background");
        this.FrontBackground = this.add.tileSprite(0, this.world.height - 278, this.world.width, 278, "FrontBackground");

        this.Player = new Player({
            game: this.game,
            x: 330,
            y: this.world.centerY,
            asset: 'Player'
        });

        this.game.add.existing(this.Player);

    }
    update(){
        // console.log(this);
        // // this.background.tilePosition.x = 0.5;
        // console.log(this);
        this.FrontBackground.tilePosition.x -= 4;
        // this.Player.position.x += 1.2;
        // debugger;
        
    }

    render() {
       
    }
}