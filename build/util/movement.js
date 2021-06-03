import Collision from "./detect_collision.js";
export default function movement(SpritePos, Objects, i) {
    console.log(i.Pressed);
    if (i.Pressed.includes("ArrowLeft")) {
        SpritePos.xpos = SpritePos.xpos - 5;
        let collided = false;
        Objects.forEach(e => {
            if (Collision(SpritePos, e)) {
                collided = true;
            }
        });
        if (!collided && SpritePos.xpos >= 0) {
            SpritePos.xpos = SpritePos.xpos + 5;
        }
    }
    if (i.Pressed.includes("ArrowRight")) {
        SpritePos.xpos = SpritePos.xpos + 5;
        let collided = false;
        Objects.forEach(e => {
            if (Collision(SpritePos, e)) {
                collided = true;
            }
        });
        if (!collided && SpritePos.xpos <= 300) {
            SpritePos.xpos = SpritePos.xpos - 5;
        }
    }
    if (i.Pressed.includes("ArrowDown")) {
    }
    if (i.Pressed.includes("ArrowUp")) {
    }
    return SpritePos;
}
