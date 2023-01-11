class InputHandler {
    constructor(){
        this.keys = [];
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