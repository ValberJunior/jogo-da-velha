//Regra do Negócio
/*
1- Iniciar o Jogo;
2- Cada Quadrado deve ter um valor, ou O ou X ;
3- A cada clique, um elemento deve ser inserido e a vez do jogador deve ser passada;
4- Dependendo do desenrolar do jogo, devemos ter um gameover e um vencedor;
 */

//variáveis
let board = ['', '', '', '', '', '', '', '', '']; //Meu tabuleiro com 9 areas;
let playerTime = 0; //Vez do Jogador > 0 para 'o' e 1 para 'x'.
let symbols = ['o','x']; //simbolos do jogo;
let gameOver = false;  //variavel que indicará o fim do jogo, ela começa false
let gameDraw = false; // Para verificar se houve empate;


function handleMove(position){

if (gameOver){ 
    return;} // Caso o gameOver for verdadeiro, não continuará a função e o clique no board nao surtirá efeito;

//Para impedir que o playertime seja modificado mesmo com o square preenchido - > if antes da condicional principal;

if (gameDraw){                    //Verificar se há empate
    return gameOver = true;
}

if (board[position]==''){
board[position] = symbols[playerTime];

 gameOver = isWin(); //Para verificar se houve jogador na rodada;

// Só posso passar a vez pro proximo jogador caso o gameOver ter valor FALSE, por isso verifico:
if (gameOver == false){ 
  
  touch.play();
  playerTime = (playerTime == 0)? 1 : 0;   //If ternário para definir de quem é a vez.

  }
}

return gameOver;

}

//Para verificar se houve vencedor na rodada:
function isWin(){

//Criarei um array que dentro dele terá um conjunto de arrays que terão todas as possibilidades de vitoria no jogo;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//para verificar se os simbolos são iguais nessas possibilidades;

for(let i=0; i < winStates.length; i++){

 let seq = winStates[i] ; //Toda vez que passar no For, pegarei um elemento do meu array de sequencias e colocarei na variável seq.

 let pos1 = seq[0];   //Quando o for estiver em ação, cada vez ele pegara uma posição do conjunto de arrays,
 let pos2 = seq[1];   //Cada posição de array terá um array, que tem 3 elementos, esses 3 elementos
 let pos3 = seq[2];   //Serão adicionados nessas variáveis pos1, pos2 e pos3;

 //Verificação de vitória

 if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
     end.play();
     
     return true;  // Se tiver um vencedor, a função retornará o valor TRUE;
 }
 
else if (board[0] != '' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' 
&& board[6] != '' && board[7] != '' && board[8] != '') 
{     
    gameDraw = true;}        //Se todos boards estiverem preenchidos e não der True no primeiro if, então o Draw retorna TRUE
}                          

return false; //Caso depois da verificação não existir vencedor, ele retornará FALSE;

}



