import { Pixelate, Input, load_img, DrawSprite, movement } from "../util/index.js";
import { drawBg } from "../draw/index.js";
import Sprite from "../types/sprite.js";
import drawGround from "../draw/ground.js";
let Objects: Array<Sprite>;
let SpritePos: Sprite;
let InputListener: Input;
let UserSprite: HTMLImageElement;
let UserSpriteFlipped: HTMLImageElement;
let GroundImg: HTMLImageElement

export async function initObjects(Canvas: HTMLCanvasElement) {
  Objects = [
    {
      xpos: Canvas.height * 0.9,
      ypos: 0,
      width: Canvas.width,
      height: Canvas.height * 0.1
    }
  ];
  SpritePos = {
    xpos: 0,
    ypos: Math.round(Canvas.height * 0.8),
    height: Math.round(Canvas.height * 0.1),
    width: Math.round(Canvas.height * 0.1),
    num: 1,
    flipped: false
  }
  InputListener = new Input()
  UserSprite = await load_img("static/Sprite Sheet.png");
  UserSpriteFlipped = await load_img("static/Sprite Sheet Flipped.png");
  GroundImg = await load_img("static/ground.png")
}

export async function one(Canvas: HTMLCanvasElement, Ctx: CanvasRenderingContext2D) {
  Pixelate(Ctx, Canvas);
  drawBg(Ctx);
  await drawGround(Ctx);
  if (SpritePos.flipped || false) {
    DrawSprite(Ctx, UserSprite, SpritePos);
  } else {
    DrawSprite(Ctx, UserSpriteFlipped, SpritePos);
  }
  SpritePos = movement(SpritePos, Objects, InputListener);

  requestAnimationFrame(() => { one(Canvas, Ctx) });
}