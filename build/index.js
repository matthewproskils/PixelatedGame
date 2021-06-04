const Canvas = document.getElementById("Game");
const Ctx = Canvas.getContext('2d');
import { initObjects, one } from "./levels/one.js";
(async () => {
    await initObjects(Canvas);
    await one(Canvas, Ctx);
})();
