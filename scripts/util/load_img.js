export default async function load_img(src){
    let img = new Image();
    img.src = src;
    await img.decode();
    return img;
}