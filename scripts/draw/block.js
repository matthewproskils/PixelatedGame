import loadImg from "../util/load_img.js"
let bg = "e";

export default async function block(Ctx, X, Y, W, H) {
    if (bg == "e") {
        bg = await loadImg("static/ground.jpg")
    }
    
    Ctx.drawImage(bg, 0, 40, W, H, X, Y, W, H);
}