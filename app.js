import PongGame from "./src/game.js";
window.addEventListener('load', function(){
    const canvas = this.document.getElementById("canvas");
    const CANVAS_HEIGHT = canvas.height = 620;
    const CANVAS_WIDTH = canvas.width = 480;
    GAME  = new PongGame(canvas, CANVAS_WIDTH, CANVAS_HEIGHT);
    GAME.init();
    animate(0);
});

let GAME;
let lastTime = 0;
function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    GAME.update(deltaTime);
    GAME.render();
    requestAnimationFrame(animate);
}