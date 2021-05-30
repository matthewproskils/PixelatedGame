import load_img from "../util/load_img.js";
let bg = "e"
export default async function drawBg(Canvas, Ctx){
    if(bg == "e"){
        bg = await load_img("static/background.jpg");
    }
    Ctx.drawImage(bg, 0, 0, Canvas.width, Canvas.height);
}