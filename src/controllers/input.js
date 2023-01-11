import { R } from "../resource.js";
class InputHandler {
    constructor(){
        this.keys = [];

        this.touchY = 0;
        this.touchX = 0;

        this.horizontalSwipe = 0;
        
        window.addEventListener('keydown', e => {
            if (this.handle(e.key)){
                let key = this.translate(e.key);
                if ( this.keys.indexOf(key) === -1){
                    this.keys.push(key);
                }
            }
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if(this.handle(e.key)){
                let key = this.translate(e.key);
                let index = this.keys.indexOf(key);
                this.keys.splice(index, 1);
            }
        });
        window.addEventListener('touchstart', e => {
            this.touchY = e.changedTouches[0].pageY;
            this.touchX = e.changedTouches[0].pageX;

        });
        window.addEventListener('touchmove', e => {
            this.horizontalSwipe = e.changedTouches[0].pageX - this.touchX;
            console.log(this.horizontalSwipe, this.keys);
            if (Math.abs(this.horizontalSwipe) >= R.speed.max.paddle.vx){
                if (this.horizontalSwipe > 0){
                    if ( this.keys.indexOf(Keys.RIGHT) === -1){
                        this.keys.push(Keys.RIGHT);
                    }         
                }
                if (this.horizontalSwipe < 0){
                    if ( this.keys.indexOf(Keys.LEFT) === -1){
                        this.keys.push(Keys.LEFT);
                    }     
                }
            } else {

            }

            this.touchX = e.changedTouches[0].pageX
        });
        window.addEventListener('touchend', e => {
            this.touchY = 0;
            this.touchX = 0; 

            if (this.horizontalSwipe > 0) {
                let index = this.keys.indexOf(Keys.RIGHT);
                if (index > -1 ){
                    this.keys.splice(index, 1);
                }
            } else if (this.horizontalSwipe < 0){
                let index = this.keys.indexOf(Keys.LEFT);
                if (index > -1){
                    this.keys.splice(index, 1);
                }

            }
            this.horizontalSwipe = 0;
        });
    }

    handle(key){
        return true;
    }
    translate(key){
        return key;
    }
    isPressed(key){
        return this.keys.indexOf(key) != -1;
    }
}

export const Keys = {
    LEFT : 0,
    RIGHT : 1
}

export class ArrowsControl extends InputHandler {
    handle(key){
        switch (key) {
            case 'ArrowLeft':
            case 'ArrowRight':
                return true;
            default:
                return false;
        }
    }

    translate(key){
        switch (key) {
            case 'ArrowLeft':
                return Keys.LEFT;
            case 'ArrowRight':
                return Keys.RIGHT;      
            default:
                return null;
        }
    }
}