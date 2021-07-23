//Script Pertencente a página > MENU

//variaveis 
let home = document.getElementById('op1');
let restart = document.getElementById('op2');
let info = document.getElementById('op3');
let audio = document.getElementById('audio');


//Eventos
home.addEventListener('click', ()=>{
    audio.play();
    setTimeout(()=>{
    window.location.replace('index.html');},1000);
})

restart.addEventListener('click', ()=>{
    audio.play();
    setTimeout(()=>{
    window.location.replace('page1.html');},1000);
})


info.addEventListener('click', ()=>{
    audio.play();
    setTimeout(()=>{
    window.location.replace('about.html');},1000);
})

