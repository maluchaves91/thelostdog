class Moeda{
    constructor(){
        this.w=width/8;
        this.h=width/8;
        this.x=width;
        this.y=height - 0.5 * this.h;
        this.vx = 10;
    }
        show() {
            image(img_moeda, this.x, this.y, this.w, this.h);
        }
        
        move() {
            this.x += this.vx;
        }

    }
