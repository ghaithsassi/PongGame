import StateStack from "./statemanager/stateStack.js";
import Paddle from "./elements/paddle.js";
import Ball from "./elements/ball.js";
import { ArrowsControl } from "./controllers/input.js";
import Player from "./player.js";

export default class PongGame {
    constructor(canvas, width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.context = canvas.getContext('2d');        
        
        this.fps;
        this.paddles = [];
    }

    init(){
        this.topPaddle = new Paddle({x : 150, y : 20}, 180, 15, this);
        this.bottomPaddle = new Paddle({x : 150, y : 600}, 180, 15, this);

        this.paddles = [this.topPaddle, this.bottomPaddle];

        this.ball = new Ball({x : 200, y : 200}, 25, this);
        this.inputPlayerOne= new ArrowsControl();

        this.player1 = new Player(this, this.bottomPaddle, this.inputPlayerOne);
    }
    update(deltaTime){
        this.ball.update();
        this.player1.update();
    }

    render(){
        this.context.clearRect(0, 0, this.width, this.height);
        // FIXME 
        this.topPaddle.draw(this.context);
        this.ball.draw(this.context);

        this.player1.draw(this.context);
    }
}
