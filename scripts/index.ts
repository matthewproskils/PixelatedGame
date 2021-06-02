const Canvas = <HTMLCanvasElement>document.getElementById("Game");
const Ctx = <CanvasRenderingContext2D>Canvas.getContext('2d');

import {initObjects, one} from "./levels/one.js"

(async () => {
    initObjects(Canvas)
    await one(Canvas, Ctx)
})()