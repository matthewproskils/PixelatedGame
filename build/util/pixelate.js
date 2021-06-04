export default function Pixelate(Ctx, Canvas) {
    //@ts-ignore
    Ctx.webkitImageSmoothingEnabled = false;
    //@ts-ignore
    Ctx.mozImageSmoothingEnabled = false;
    //@ts-ignore
    Ctx.msImageSmoothingEnabled = false;
    //@ts-ignore
    Ctx.imageSmoothingEnabled = false;
    //These are experimental so typescript throws an error
    Canvas.style.cssText = 'image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges;image-rendering: -webkit-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: pixelated; -ms-interpolation-mode: nearest-neighbor;';
}
