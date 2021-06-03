export default function DrawSprite(Ctx, img, UserSprite) {
    Ctx.drawImage(img, 0, 0, 10, 10, UserSprite.xpos, UserSprite.ypos, UserSprite.width, UserSprite.height);
}
