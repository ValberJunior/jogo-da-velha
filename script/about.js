//Script para a página ABOUT.HTML

//Variáveis
let back = document.getElementById('back');
let audio = document.getElementById('audio');


//Evento
back.addEventListener('click', ()=>{
    audio.play();
    setTimeout(()=>{
    window.location.replace('../index.html');},1000);
})

