let dog;

function setup() {
    createCanvas(windowWidth, windowHeight);
    dog=new Dog();
  }
  
  function draw() {
    background(220);
    dog.show();
  }