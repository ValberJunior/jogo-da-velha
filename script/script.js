let volume = document.getElementById('volume');
let audio = document.getElementById('audio');
let start = document.getElementById('start');
let audio2 = document.getElementById('audio2');


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

//botão start

start.addEventListener('click', ()=>{
    audio2.play();
    setTimeout(()=>{
    window.location.replace('../page1.html');},1000);
})
