export default function Pixelate(Ctx, Canvas) {
    Ctx.webkitImageSmoothingEnabled = false;
    Ctx.mozImageSmoothingEnabled = false;
    Ctx.msImageSmoothingEnabled = false;
    Ctx.imageSmoothingEnabled = false;
    Canvas.style.cssText = 'image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges;image-rendering: -webkit-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: pixelated; -ms-interpolation-mode: nearest-neighbor;';
}
