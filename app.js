import PongGame from "./src/game.js";
import {R} from "./src/resource.js"

window.addEventListener('load', function(){
    
    const canvas = this.document.getElementById(R.id.canvas);

    const CANVAS_HEIGHT = canvas.height = R.size.canvas.height;
    const CANVAS_WIDTH = canvas.width = R.size.canvas.width;

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