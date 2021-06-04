import Collision from "./detect_collision.js";
let a = false;
export default function movement(SpritePos, Objects, i) {
    if (i.Pressed.includes("ArrowLeft")) {
        SpritePos.xpos = SpritePos.xpos - 6;
        let collided = false;
        Objects.forEach(e => {
            if (Collision(SpritePos, e)) {
                collided = true;
            }
        });
        if (collided || SpritePos.xpos <= 0) {
            SpritePos.xpos = SpritePos.xpos + 6;
        }
        else if (a) {
            SpritePos.num >= 3 ? SpritePos.num = 1 : SpritePos.num = SpritePos.num + 1;
            console.log(SpritePos.num);
        }
        else if (!a) {
            a = true;
        }
        SpritePos.flipped = true;
    }
    if (i.Pressed.includes("ArrowRight")) {
        SpritePos.xpos = SpritePos.xpos + 6;
        let collided = false;
        Objects.forEach(e => {
            if (Collision(SpritePos, e)) {
                collided = true;
            }
        });
        if (collided || SpritePos.xpos >= 300 - SpritePos.width) {
            SpritePos.xpos = SpritePos.xpos - 6;
        }
        else if (a) {
            SpritePos.num >= 3 ? SpritePos.num = 1 : SpritePos.num = SpritePos.num + 1;
            console.log(SpritePos.num);
        }
        else if (!a) {
            a = true;
        }
        SpritePos.flipped = false;
    }
    if (i.Pressed.includes("ArrowDown")) {
    }
    if (i.Pressed.includes("ArrowUp")) {
    }
    if (!(i.Pressed.includes("ArrowDown")) && !(i.Pressed.includes("ArrowUp")) && !(i.Pressed.includes("ArrowLeft")) && !(i.Pressed.includes("ArrowRight"))) {
        SpritePos.num = 0;
    }
    return SpritePos;
}
