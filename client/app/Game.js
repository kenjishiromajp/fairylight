import 'pixi'
import 'p2'
import InitialState from "./states/InitialState";
import LoadingState from "./states/LoadingState";
import Phaser from "phaser";

export default class Game extends Phaser.Game{
    constructor(socketURL){
        var width = 1080;
        var height = 1920;
        super(width, height, Phaser.CANVAS, 'content', null);
        
        
        this.state.add('Inital', InitialState, false);
        this.state.start('Inital');
    }
}