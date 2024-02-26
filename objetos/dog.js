class Dog {
    constructor() {
        this.w = width / 7;
        this.h = height / 8;
        this.x = 50;
        this.y = height - 1.2 * this.h;
        this.g = 2;
        this.vy = 0;
    }

    move() {
     this.y += this.vy;
     this.vy += this.g;
          this.y = constrain(this.y, 0, height - this.h);
    }

    show() {
        image(img_dog, this.x, this.y, this.w, this.h);
    }

    jump() {
        if (this.y == height - this.h) {
            this.vy = -25;
        }
    }
  
}