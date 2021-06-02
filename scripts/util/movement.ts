import Collision from "./detect_collision.js"
import Sprite from "../types/sprite.js"
import Input from "./catch_input.js"
export default function movement(SpritePos: Sprite, Objects: Array<Sprite>, i: Input) {
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