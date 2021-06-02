export default class Input{
    constructor(){
        window.addEventListener("keydown", (e) => {
            this.Pressed.push(e.key);
        })
        window.addEventListener("keyup", (e) => {
          let index = this.Pressed.indexOf(e.key);
          if (index > -1) {
            this.Pressed.splice(index, 1);
          }
        })
    }
    Pressed: Array<string> = []
}