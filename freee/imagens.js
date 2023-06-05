let rodovia, player, imagemCarro;
let somDaTrilha;
let somDoColisor;
let somDaPontuacao;

function preload(){
  rodovia = loadImage("imagens/estrada.png");
  player = loadImage("imagens/ator-1.png");
  imagemCarro = [loadImage("imagens/carro-1.png"), loadImage("imagens/carro-2.png"), loadImage("imagens/carro-3.png")];
  somDaTrilha = loadSound ("sons/trilha.mp3");
  somDoColisor = loadSound("sons/colidiu.mp3");
  somDaPontuacao =loadSound("sons/pontos.wav");
  
}

imagemCarro = []
