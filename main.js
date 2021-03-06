
const playSound = (e)=>{
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('active')
}

function removeClass(e){
    if(e.propertyName !== "border-bottom-color") return;
    this.classList.remove('active')
}
window.addEventListener('keydown',playSound) 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeClass))