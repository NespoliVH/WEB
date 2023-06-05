//Carros
let xCarro = [600, 680, 730, 630, 800, 650];
let yCarro = [44, 100, 152, 213, 264, 320];
let velocidadeCarro = [3, 3, 4, 5, 6, 7];

function movimentaCarro(){
  for(let i = 0;i < xCarro.length;i++){
  xCarro[i] -= velocidadeCarro[i];

    }
}

function voltaCarro(){
  if(xCarro[0] < -55){
     xCarro[0] = 600;
     velocidadeCarro[0] *= 1.25;  
  };
  if( xCarro[1] < -60){
      xCarro[1] = 600
  };
  if( xCarro[2] < -58){
      xCarro[2] = 600
  };
  if( xCarro[3] < -55){
      xCarro[3] = 600
  };
  if( xCarro[4] < -60){
      xCarro[4] = 600
  };
  if( xCarro[5] < -58){
      xCarro[5] = 600
  
  };
  
}

function velocidadeMax(){
  if(velocidadeCarro[0] >= 8){
     velocidadeCarro[0] = 8;
  }
}
function exibirPlacar(){
  textSize(20);
  fill (color, 255,0 ,0);
  text (pontosDoPlayer, 228, 27 );
}


