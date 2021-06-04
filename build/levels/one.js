import { Pixelate, Input, load_img, DrawSprite, movement } from "../util/index.js";
import { drawBg } from "../draw/index.js";
import drawGround from "../draw/ground.js";
let Objects;
let SpritePos;
let InputListener;
let UserSprite;
let UserSpriteFlipped;
let GroundImg;
let num = 0;
export async function initObjects(Canvas) {
    Objects = [
        {
            xpos: Canvas.height * 0.9,
            ypos: 0,
            width: Canvas.width,
            height: Canvas.height * 0.1,
            num: 0
        }
    ];
    SpritePos = {
        xpos: 0,
        ypos: Math.round(Canvas.height * 0.75),
        height: Math.round(Canvas.height * 0.15),
        width: Math.round(Canvas.height * 0.15),
        flipped: false,
        num: 0
    };
    InputListener = new Input();
    UserSprite = await load_img("static/Sprite Sheet.png");
    UserSpriteFlipped = await load_img("static/Sprite Sheet Flipped.png");
    GroundImg = await load_img("static/ground.png");
}
export async function one(Canvas, Ctx) {
    Pixelate(Ctx, Canvas);
    drawBg(Ctx);
    await drawGround(Ctx);
    if (SpritePos.flipped || false) {
        DrawSprite(Ctx, UserSprite, SpritePos);
    }
    else {
        DrawSprite(Ctx, UserSpriteFlipped, SpritePos);
    }
    SpritePos = movement(SpritePos, Objects, InputListener);
    requestAnimationFrame(() => { setTimeout(() => { one(Canvas, Ctx); }, 200); });
}
