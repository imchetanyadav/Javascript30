
window.addEventListener('keydown', playSound);

function playSound(e) {
    let audio = null;
    let key = null;
    if (e instanceof KeyboardEvent){
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    }
    else{
        audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
        key = document.querySelector(`div[data-key="${this.getAttribute('data-key')}"]`);
    }
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('click', playSound));