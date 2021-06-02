import loadImg from "../util/load_img.js"
let bg: HTMLImageElement;

export default async function ground(Canvas: HTMLCanvasElement, Ctx: CanvasRenderingContext2D, percent: number) {
    if (bg == undefined || bg == null) {
      bg = await loadImg("static/ground.jpg")
    }

    Ctx.drawImage(bg, 0, 40, 281, (281 / Canvas.width * Canvas.height), 0, Canvas.height * (1 - percent), Canvas.width, Canvas.height*(1-percent));
}