export default class Ball {
    constructor(position, radius, game){
        this.x = position.x;
        this.y = position.y;
        this.radius = radius;
        this.game = game;

        this.vx = 2;
        this.vy = -1;
    }

    update(){
        let xLeft = (this.x + this.vx - this.radius) >= 0,
            xRight = (this.x + this.vx + this.radius) <= this.game.width,
            yTop = (this.y + this.vy - this.radius) >= 0,
            yDown = (this.y + this.vy + this.radius) <= this.game.height;

        if (xLeft && xRight){
            this.x += this.vx;
        } else if (xRight || xLeft){
            this.vx *= -1;
        } else {
            this.vx = 0;
        }

        if (yTop && yDown){
            this.y += this.vy;
        } else if (yTop || yDown){
            this.vy *= -1;
        } else {
            this.vy = 0;
        }

        this.checkUpdateCollision();

    }

    checkUpdateCollision(){
        
        this.game.paddles.every(paddle => {
    
            let d, shift = (this.x - paddle.x);
            if (shift < 0 ){
                d = Math.sqrt((this.x - paddle.x)*(this.x - paddle.x) + (this.y - paddle.y) * (this.y - paddle.y));
            } else if (shift > paddle.length) {
                d = Math.sqrt((this.x - paddle.x - paddle.length) * (this.x - paddle.x - paddle.length) + (this.y - paddle.y) * (this.y - paddle.y));
            } else {
                d = Math.abs(this.y - paddle.y);
            }

            if (d <= this.radius) {
                this.vx *= -1;
                this.vy *= -1;
                return false;
            } else {
                return true;
            }
        });
    }

    draw(context){

        context.fillStyle = "#000000";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();

    }
}