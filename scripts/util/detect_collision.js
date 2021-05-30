export default function Collision(Obj1x, Obj1y, Obj1w, Obj1h, Obj2x, Obj2y, Obj2w, Obj2h, t) {
    if (t)
        console.log(Obj1x, Obj1y, Obj1w, Obj1h, Obj2x, Obj2y, Obj2w, Obj2h)
    if ((Obj1y > Obj2y + Obj2h) || ((Obj1y + Obj1y) < Obj2y)) {
        return false;
        //X of Obj1 is not in X of Obj2
    } else if ((Obj1x > Obj2x + Obj2w) || (Obj1x + Obj1w) < Obj2x) {
        return false;
        //Y of Obj1 is not in Y of Obj2
    } else {
        if (t)
            console.log(3)
        return true;
    }
}