let Canvas = {};
let Ctx = {};
export default function P_init(c, ca){
    Ctx = c

    Ctx.webkitImageSmoothingEnabled = false;
    Ctx.mozImageSmoothingEnabled = false;
    Ctx.msImageSmoothingEnabled = false;
    Ctx.imageSmoothingEnabled = false;

    Canvas = ca;

    Canvas.style.cssText = 'image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges;image-rendering: -webkit-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: pixelated; -ms-interpolation-mode: nearest-neighbor;';
}