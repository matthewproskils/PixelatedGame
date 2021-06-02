//@ts-ignore to ignore unused imports
import { Pixelate, Input, movement, load_img, DrawSprite, Collision } from "../util"
import * as Draw from "../draw"
let Objects = [];
let SpritePos = {};
let InputListener = {};
let C = {}

export function initObjects(Canvas: HTMLCanvasElement) {
  C = Canvas;
  Objects = [
  ];
  SpritePos = {
  }
  InputListener = new Input()
}


export async function one(Canvas: HTMLCanvasElement, Ctx: CanvasRenderingContext2D) {
  
}