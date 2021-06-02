export default function movement(SpritePos, Objects, i) {
    if (i.Pressed.includes("ArrowLeft")) {
        SpritePos.xpos = SpritePos.xpos - 5;
        //Check for no collision
        //if()
    }
    if (i.Pressed.includes("ArrowRight")) {
    }
    if (i.Pressed.includes("ArrowDown")) {
    }
    if (i.Pressed.includes("ArrowUp")) {
    }
    return SpritePos;
}
