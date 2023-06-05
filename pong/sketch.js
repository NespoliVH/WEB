let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

  let velocidadexBolinha = 8;
  let velocidadeyBolinha = 8;

let xRaquete = 5;
let yRaquete = 150;
let Comprimento = 10;
let alturaDaRaquete = 90;
let ingRaquetex = 585;
let ingRaquetey =150;

let meusPontos = 0;
let pontosDoOponente = 0;

  
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete();
  movimentaMinhaRaquete();
  verificaColisaoComRaquete();
  mostrarRaqueteIng();
  movimentaMinhaRaqueteing();
  verificaColisaoComRaqueteing();
  incluiPlacar();
  artilheiro();
  bolinhaNaoFicaPresa();
  win()
}

function mostraBola(){
    circle(xBolinha, yBolinha, diametro);

}
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
   if(xBolinha +raio >width ||
     xBolinha -raio< 0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha +raio > height ||
     yBolinha -raio < 0){
    velocidadeyBolinha *= -1;
  }
}
function mostrarRaquete(){
  rect(xRaquete, yRaquete, Comprimento, alturaDaRaquete) 
}
function mostrarRaqueteIng(){
  rect(ingRaquetex,ingRaquetey , Comprimento, alturaDaRaquete) 
}
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function movimentaMinhaRaqueteing() {
 ingRaquetey = yBolinha - 50
}
function verificaColisaoComRaquete(){
  if(xBolinha - raio < xRaquete + Comprimento && yBolinha - raio < yRaquete + alturaDaRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
    
}
function verificaColisaoComRaqueteing(){
  if(xBolinha + raio > ingRaquetex){
    velocidadexBolinha *= -1;
  }
    
}
function incluiPlacar(){
  textAlign(CENTER);
  fill(	179, 21, 54)
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
function artilheiro(){
  if(xBolinha > 590){
    meusPontos +=1
  }
  if(xBolinha < 10){
    pontosDoOponente +=1
  }
}
function win(){
  if(pontosDoOponente >= 11)
  pontosDoOponente=0
  
  if(meusPontos >= 11)
  meusPontos = 0
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
