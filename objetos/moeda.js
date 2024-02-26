class Moeda{
    constructor(){
        this.w=width/10;
        this.h=width/10;
        this.x=width;
        this.y=height - 1.2 * this.h;
        this.vx = 10;
    }
        show() {
            image(img_moeda, this.x, this.y, this.w, this.h);
        }
        
        move() {
            this.x -= this.vx;
        }

    }
