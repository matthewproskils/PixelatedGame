import Collision from "../util/detect_collision.js"

export default function movement(SpritePos, Objects, C, i) {
    if (i.Pressed["ArrowLeft"]) {
        if (SpritePos.X - 6 >= 0) {
            SpritePos.X = SpritePos.X - 1;
            let br = true;
            Objects.forEach(E => {
                // if(E.StartX < SpritePos.X && ){

                // }
                if (!Collision(E.StartX, E.StartY, E.Width, E.Height, SpritePos.X, SpritePos.Y, SpritePos.W, SpritePos.H) && br) {
                    SpritePos.X = SpritePos.X - 6;
                    br = false;
                }
            })
            SpritePos.SourceX == 8 ? SpritePos.SourceX = 1 : SpritePos.SourceX += 1;
        }
        SpritePos.SourceY = 3;
        SpritePos["facing"] = "left";
    }

    if (i.Pressed["ArrowRight"]) {
        if (SpritePos.X + 6 + SpritePos.W < C.width) {
            SpritePos.X = SpritePos.X + 1;
            let br = true;
            Objects.forEach(E => {
                if (!Collision(E.StartX, E.StartY, E.Width, E.Height, SpritePos.X, SpritePos.Y, SpritePos.W, SpritePos.H) && br) {
                    SpritePos.X = SpritePos.X + 6;
                    br = false;
                }
            })
            SpritePos.SourceX == 8 ? SpritePos.SourceX = 1 : SpritePos.SourceX += 1;
        }
        SpritePos.SourceY = 3;
        SpritePos["facing"] = "right";
    }

    if (i.Pressed["ArrowDown"]) {
        SpritePos.SourceY = 5;
        SpritePos.SourceX = 0;
    }

    //Gravity
    let gravity = false;
    SpritePos.Y += 2;
    let br = true;
    Objects.forEach(E => {
        if (Collision(E.StartX, E.StartY, E.Width, E.Height, SpritePos.X, SpritePos.Y, SpritePos.W, SpritePos.H) && br) {
            SpritePos.Y -= 2;
            br = false;
            gravity = true
        }
    })
    if (!gravity) {
        if ((!i.Pressed["ArrowRight"]) && (!i.Pressed["ArrowLeft"])) {
            SpritePos.SourceX = 5;
        }
        SpritePos.SourceY = 3;
    }

    if (i.Pressed["ArrowUp"]) {
        let found = false;
        SpritePos.Y = SpritePos.Y + 1;
        Objects.forEach(E => {
            if (gravity && !Collision(E.StartX, E.StartY, E.Width, E.Height, SpritePos.X, SpritePos.Y+10, SpritePos.W, SpritePos.H) && !found) {
                found = true;
                SpritePos.Y = SpritePos.Y - 15;
                setTimeout(() => { SpritePos.Y = SpritePos.Y - 10 }, 25)
                setTimeout(() => { SpritePos.Y = SpritePos.Y - 10 }, 50)
            }
        })
        if (!found) {
            SpritePos.Y = SpritePos.Y - 1;
        }
        SpritePos.SourceY = 3;
    }


    if ((!i.Pressed["ArrowDown"]) && (!i.Pressed["ArrowUp"]) && (!i.Pressed["ArrowLeft"]) && (!i.Pressed["ArrowRight"]) && gravity) {
        SpritePos.SourceX = 0;
    }
}
