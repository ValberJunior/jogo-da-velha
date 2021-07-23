//Interface - interação com html


//Sons

let end = document.getElementById('audio-end-game');
let touch = document.getElementById('touch');


/*
1- Ser capaz de identificar o clique do usuário;
Para isso preciso garantir que o arquivo html foi carregado;
*/

document.addEventListener('DOMContentLoaded',()=>{

  let squares = document.querySelectorAll('.square'); //Assim pego todos os elementos do meu tabuleiro
  
  //Agora adicionarei a todos os 'squares' o evento 'click'
  
  squares.forEach((square)=>{
      square.addEventListener('click',handleClick);
  })

})

//Agora definirei a função que acontecerá quando houver o clique no square relacionado.

function handleClick(event){
    
    let square = event.target;                                       //o target me enviará os dados do meu elemento
    let position = square.id;                                        //com o apoio do target irei pegar a propriedade do meu atributo id;

  if  (handleMove(position)){ 

      setTimeout(()=>{
          winner();
      },30);

      setTimeout(()=>{
        window.location.replace('../menu.html')              //Após o vencedor ser anúnciado, ele joga pro menu do Jogo
    },1000);
  }  
     else if(handleMove(position) && gameDraw){
      setTimeout(() => { alert ("DEU VELHA!");}, 10);
    
      setTimeout(()=>{
        window.location.replace('../menu.html')              //Após o vencedor ser anúnciado, ele joga pro menu do Jogo
    },1000);}
                                    
    updateSquares();                                                //Chamarei minha função para atualizar o tabuleiro;
}

//Para definir o vencedor;
function winner(){
  if (playerTime == 0){
    alert('O JOGO ACABOU! \n O VENCEDOR FOI: 🔴');
  } else {
    alert('O JOGO ACABOU! \n O VENCEDOR FOI: ❌')
  }
}

//Função para atualizar o tabuleiro:
function updateSquares(){

    
    let squares = document.querySelectorAll('.square');               //Pego novamente todos os elementos do meu tabuleiro:

    //Agora adicionarei o simbolo correspondente aos jogadores.
    
    squares.forEach((square)=>{
       
      //crio a posição:
       let position = square.id;

       let symbol = board[position]                     //defino onde o simbolo será adicionado;

      //Determino a que jogador pertence o simbolo (respeitando a sua vez):

      if(symbol != ''){
          square.innerHTML = `<div class='${symbol}'></div>`;
      }

    })


}



//Botão restart

let restart = document.getElementById('restart');

restart.addEventListener('click',restoure);

function restoure(){
  
  board = ['', '', '', '', '', '', '', '', ''];
   gameOver = false;
   playerTime = 0;
  

   cleanBoard();

} 


//Função limpar tabuleiro

function cleanBoard()
  {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.innerHTML = '';
    })


}



