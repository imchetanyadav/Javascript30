const pressed = [];
const secretCode = 'chetan';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    console.log('Yep thats me.')
    cornify_add();
  }
});