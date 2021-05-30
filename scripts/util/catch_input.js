export default class Input{
    constructor(){
        window.addEventListener("keydown", (e) => {
            this.Pressed[e.key] = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.Pressed[e.key];
        })
    }
    Pressed = {

    }
}