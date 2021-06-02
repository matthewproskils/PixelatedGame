export default function Collision(Sprite1, Sprite2) {
    if (Sprite1.xpos < Sprite2.xpos + Sprite2.width &&
        Sprite1.xpos + Sprite1.width > Sprite2.xpos &&
        Sprite1.ypos < Sprite2.ypos + Sprite2.height &&
        Sprite1.ypos + Sprite1.height > Sprite2.ypos) {
        // collision detected!
    }
}
