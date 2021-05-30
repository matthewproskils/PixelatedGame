export default function Sprite(Ctx, img, SourceX, SourceY, CanvasX, CanvasY){
    Ctx.drawImage(img, SourceX*32, SourceY*32, 32, 32, CanvasX, CanvasY, 32, 32);
}