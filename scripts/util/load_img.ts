export default async function load_img(src: string){
    let img = new Image();
    img.src = src;
    await img.decode();
    return img;
}