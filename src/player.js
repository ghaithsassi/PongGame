import { Keys } from "./controllers/input.js";
export default class Player {
    constructor(game, paddle, inputHandler){
        this.game = game;
        this.paddle = paddle;
        this.input = inputHandler;

        this.speed = 0;
        this.maxSpeed = 3;
    }


    update(){
        this.paddle.x += this.speed;

        if (this.input.isPressed(Keys.LEFT)){
            if (this.paddle.x > 5) {
                this.speed = -this.maxSpeed;
            } else {
                this.speed = 0;
            }
        } else if  (this.input.isPressed(Keys.RIGHT)){
            if (this.paddle.x < this.game.width - this.paddle.length - 5){
                this.speed = this.maxSpeed;
            } else {
                this.speed = 0;
            }
        } else {
            this.speed = 0;
        }
    }

    draw(context){
        this.paddle.draw(context);
    }
}