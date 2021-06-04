export default function DrawSprite(Ctx, img, UserSprite) {
    Ctx.drawImage(img, (UserSprite.num) * 10, 0, 10, 10, UserSprite.xpos, UserSprite.ypos, UserSprite.width, UserSprite.height);
}
