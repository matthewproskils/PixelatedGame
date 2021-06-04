import load_img from "../util/load_img.js";
let GroundImg;
export default async function drawGround(Ctx) {
    if (GroundImg == null || GroundImg == undefined) {
        GroundImg = await load_img("static/ground.png");
    }
    let width = GroundImg.width / GroundImg.height * (Ctx.canvas.height * 0.1);
    let upTo = Math.ceil(Ctx.canvas.width / width);
    for (let i = 0; i < upTo; i++) {
        Ctx.drawImage(GroundImg, i * width, Ctx.canvas.height * 0.9, width, Ctx.canvas.height * 0.1);
    }
}
