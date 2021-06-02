export default function DrawSprite(Ctx: CanvasRenderingContext2D, img: HTMLImageElement, SourceX: number, SourceY: number, CanvasX: number, CanvasY: number){
    Ctx.drawImage(img, SourceX*32, SourceY*32, 32, 32, CanvasX, CanvasY, 32, 32);
}