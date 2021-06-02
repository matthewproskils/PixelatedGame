//@ts-ignore to ignore unused imports
import { Input } from "../util";
let Objects = [];
let SpritePos = {};
let InputListener = {};
let C = {};
export function initObjects(Canvas) {
    C = Canvas;
    Objects = [];
    SpritePos = {};
    InputListener = new Input();
}
export async function one(Canvas, Ctx) {
}
