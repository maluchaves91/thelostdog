class Popp{
    constructor(){
this.w=width/8;
this.h=width/8;
this.x=width;
this.y=height - 1.2 * this.h;
    }
    show() {
        image(img_obstaculo, this.x, this.y, this.w, this.h);
    }
    
    move() {
        this.x += this.vx;
    }
}