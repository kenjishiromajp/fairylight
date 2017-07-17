import 'pixi'
import 'p2'
import InitialState from "./states/InitialState";
import Phaser from "phaser";

export default class Game extends Phaser.Game{
    constructor(){
        var width = 1080;
        var height = 1920;
        super(width, height, Phaser.CANVAS, 'content', null);
        this.body = {
            gravity: {
                y: 1
            }
        };
        this.state.add('Inital', InitialState, false);
        this.state.start('Inital');
    }
}