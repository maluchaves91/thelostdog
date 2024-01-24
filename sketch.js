let dog;
let img_btn_iniciar, img_dog, img_fundo, img_inicio, img_moeda, img_perdeu, img_venceu, img_obstaculo;

function preload(){
  img_btn_iniciar=loadImage("imagens/btn_iniciar.png");
  img_dog=loadImage("imagens/dog.gif");
  img_fundo=loadImage("imagens/fundo.gif");
  img_inicio=loadImage("imagens/inicio.gif");
  img_moeda=loadImage("imagens/moeda.gif");
  img_perdeu=loadImage("imagens/perdeu.png");
  img_venceu=loadImage("imagens/venceu.png");
  img_obstaculo=loadImage("imagens/obstaculo.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    dog=new Dog();
  }
  
  function draw() {
    background(220);
    dog.show();
  

  if(Keypressed=" "){
    dog.jump();
  }
}