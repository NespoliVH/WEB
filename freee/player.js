let xPlayer = 100;
let yPlayer = 369;
let pontosDoPlayer = 0;
let colisao = false;

function movimentaPlayer(){
  if(keyIsDown(87)){
       yPlayer -= 3;
     }
  if(keyIsDown(83)){
       yPlayer += 3;
     }
  if(keyIsDown(65)){
       xPlayer -= 3;
     }
  if(keyIsDown(68)){
       xPlayer += 3;
     }
}

function bordaDaTela(){
  if(yPlayer < 10 ){
    yPlayer = 369;
    pontosDoPlayer += 1;
    somDaPontuacao.play();
    console.log('voce ganhou!!')
    }
    
  if(yPlayer > 369)
    yPlayer = 369
 
  if(xPlayer < 0)
    xPlayer =0
  
  if(xPlayer > 475)
  xPlayer = 475
  
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < xCarro.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], 60, 40, xPlayer, yPlayer, 15)
    if (colisao){
      somDoColisor.play();
      colidiu();
    }
  }
}

function colidiu(){
    yPlayer = 366;
    if( pontosDoPlayer > 0){
      pontosDoPlayer -=1;
     }
  console.log('você perdeu!!')

}
function win(){
  if(pontosDoPlayer >= 11)
    pontosDoPlayer=0
}


