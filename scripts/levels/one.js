import P_init from "../util/pixelate.js";
import background from "../draw/bg.js";
import load_img from "../util/load_img.js";
import Sprite from "../util/sprite.js"
let Objects = [];
let SpritePos = {};
let InputListener = {};
let C = {}
import ground from "../draw/ground.js";
import Input from "../util/catch_input.js";
import movement from "../util/movement.js";
import block from "../draw/block.js";

export function initObjects(Canvas) {
    C = Canvas;
    Objects = [
        { StartX: 0, StartY: Canvas.height * 0.9, Width: Canvas.width, Height: Canvas.height * 0.1 },
        //Ground
        {StartX: Canvas.width*0.8, StartY: Canvas.height*0.7, Width: Canvas.width*0.1, Height: Canvas.height*0.1}
    ];
    SpritePos = {
        Sprite: "e",
        SpriteBack: "e",
        Y: (Canvas.height * 0.9) - 33,
        X: 0,
        W: 32,
        H: 32,
        SourceX: 0,
        SourceY: 3,
        facing: "right"
    }
    InputListener = new Input()
}


export async function one(Canvas, Ctx) {
    Ctx.clearRect(0, 0, Canvas.width, Canvas.height)
    P_init(Ctx, Canvas);

    await background(Canvas, Ctx);

    if (SpritePos.Sprite == "e") {
        SpritePos.Sprite = await load_img("static/Sprite Sheet.png");
    }
    if (SpritePos.SpriteBack == "e") {
        SpritePos.SpriteBack = await load_img("static/Sprite Sheet Flipped.png");
    }

    movement(SpritePos, Objects, C, InputListener);

    await ground(Canvas, Ctx, 0.1);
    await block(Ctx, Canvas.width*0.8, Canvas.height*0.7, Canvas.width*0.1, Canvas.height*0.1);
    if (SpritePos["facing"] == "right") {
        Sprite(Ctx, SpritePos.Sprite, SpritePos.SourceX, SpritePos.SourceY, SpritePos.X, SpritePos.Y)
    } else if (SpritePos["facing"] == "left") {
        Sprite(Ctx, SpritePos.SpriteBack, 13 - SpritePos.SourceX, SpritePos.SourceY, SpritePos.X, SpritePos.Y)
    }
    
    setTimeout(() => { requestAnimationFrame(() => {one(Canvas, Ctx) }) }, 50);
}