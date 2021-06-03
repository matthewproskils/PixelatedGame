import Sprite from "../types/sprite.js";

export default function DrawSprite(Ctx: CanvasRenderingContext2D, img: HTMLImageElement, UserSprite: Sprite) {
    Ctx.drawImage(img, 0, 0, 10, 10, UserSprite.xpos, UserSprite.ypos, UserSprite.width, UserSprite.height);
}