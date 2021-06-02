export function drawImg(Ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number){
    Ctx.drawImage(img, x, y, w, h)
}