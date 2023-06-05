
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(rodovia);
  mostraImagem(player, xPlayer, yPlayer, 60, 60)
  mostraImagem(imagemCarro[0], xCarro[0], yCarro[0], 60, 40);
  mostraImagem(imagemCarro[1], xCarro[1], yCarro[1], 60, 40);
  mostraImagem(imagemCarro[2], xCarro[2], yCarro[2], 60, 40);
  mostraImagem(imagemCarro[1], xCarro[3], yCarro[3], 60, 40);
  mostraImagem(imagemCarro[2], xCarro[4], yCarro[4], 60, 40);
  mostraImagem(imagemCarro[0], xCarro[5], yCarro[5], 60, 40);
  movimentaCarro();
  movimentaPlayer();
  voltaCarro();
  velocidadeMax();
  bordaDaTela();
  exibirPlacar();
  verificaColisao();
  win();
  
  
  
}

function mostraImagem(carro, x, y, largura, comprimento){
   image(carro, x, y, largura, comprimento);
}







