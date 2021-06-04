export default class Input{
    constructor(){
        window.addEventListener("keydown", (e) => {
            this.Pressed.push(e.key);
        })
        window.addEventListener("keyup", (e) => {
          let index = this.Pressed.indexOf(e.key);
          this.Pressed = this.Pressed.filter(a => a != e.key);
        })
    }
    Pressed: Array<string> = []
}