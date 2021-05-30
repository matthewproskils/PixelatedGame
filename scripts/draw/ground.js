import loadImg from "../util/load_img.js"
let bg = "e";

export default async function ground(Canvas, Ctx, percent) {
    if (bg == "e") {
        bg = await loadImg("static/ground.jpg")
    }

    Ctx.drawImage(bg, 0, 40, 281, (281 / Canvas.width * Canvas.height), 0, Canvas.height * (1 - percent), Canvas.width, Canvas.height*(1-percent));
}