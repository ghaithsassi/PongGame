export default class Paddle {
    constructor(position, length, width, game){
        this.x  = position.x;
        this.y = position.y;
        this.length = length;
        this.width = width;

        this.game = game;
    }

    draw(context){
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = this.width;
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + this.length, this.y);
        context.stroke();
    }
}