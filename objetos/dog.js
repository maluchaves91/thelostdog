class Dog{
constructor(){
    this.w = width/8;
    this.h = height/10;
this.x = 50;
this.y =height - this.h;
this.g= 20;

}


show (){
    rect(this.x,this.y,this.w,this.h);
}
}