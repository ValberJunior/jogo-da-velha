
let back = document.getElementById('back');
let audio = document.getElementById('audio');



back.addEventListener('click', ()=>{
    audio.play();
    setTimeout(()=>{
    window.location.replace('../index.html');},1000);
})

