export default class StateStack {
    constructor(){
        this.stack = []
    }

    push(state){
        this.stack.push(state);
        state.enter();
    }
    pop() {
        let state = this.stack[this.stack.length - 1];
        this.stack.splice(this.stack.length - 1);
        state.exit();
        return state;
    }
    clear(){
        this.stack = [];
    }
    render(){
        this.stack.forEach(function(state){
            state.render();
        });
    }
    update(deltaTime){
        this.stack[this.stack.length - 1].update(deltaTime);
    }
}