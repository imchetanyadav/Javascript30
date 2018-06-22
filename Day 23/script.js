const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // Stop bubbling
}

// divs.forEach(div => div.addEventListener('click', logText)); // three two one

// divs.forEach(div => div.addEventListener('click', logText, { capture: true })); // one two three

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true  // remove event listener from div after one click
}));

// document.body.addEventListener