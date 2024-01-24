class Dog {
    constructor() {
        this.w = width / 7;
        this.h = height / 8;
        this.x = 50;
        this.y = height - 1.2*this.h;
        this.g = 20;

    }


    show() {
        image(img_dog, this.x, this.y, this.w, this.h);
    }

    jump(){
        this.y -= 10;
    }
}