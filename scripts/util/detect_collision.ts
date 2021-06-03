import Sprite from "../types/sprite.js"

export default function Collision(Sprite1: Sprite, Sprite2: Sprite) {
  if (Sprite1.xpos < Sprite2.xpos + Sprite2.width &&
    Sprite1.xpos + Sprite1.width > Sprite2.xpos &&
    Sprite1.ypos < Sprite2.ypos + Sprite2.height &&
    Sprite1.ypos + Sprite1.height > Sprite2.ypos) {
    return true;
  } else {
    return false
  }
}