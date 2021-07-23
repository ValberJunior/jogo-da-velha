//Script Para a Pagina 1


//PART 1

//Sons

let audio = document.getElementById('audio');
let audio2 = document.getElementById('audio2');
let volume = document.getElementById('volume');


//Escolher Jogador


let playerO = document.getElementById('optO');
let playerX = document.getElementById('optX');

//Som da Página de escolha do Jogador -- 

let sound = true;

volume.addEventListener('click',()=>{
    if(sound){
        audio.muted = true;
        volume.src = '../assets/volOff.png'
        return sound = false;
    } else{
        audio.muted = false;
        volume.src = '../assets/volOn.png'
        return sound = true;
    }
})

//Botão para Voltar ao menu principal;

let back = document.getElementById('back');

back.addEventListener('click', ()=>{

    audio2.play();
    setTimeout(()=>{
    window.location.replace('index.html');},1000);

})

//Escolha do player

playerO.addEventListener('click',()=>{ 

    playerO.style.backgroundColor = 'darkblue';
    audio2.play();
    setTimeout(()=>{
    window.location.replace('page2.html');},1000);
    localStorage.setItem("start", 0);
})

playerX.addEventListener('click',()=>{

    playerX.style.backgroundColor = 'darkblue';
    audio2.play();
    setTimeout(()=>{
    window.location.replace('page2.html');},1000);  
    localStorage.setItem("start", 1);
})

