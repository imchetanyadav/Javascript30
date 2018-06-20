const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width + 6,
    height: linkCoords.height + 6,
    top: linkCoords.top + window.scrollY - 3,
    left: linkCoords.left + window.scrollX - 3
  }
  
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}


triggers.forEach( a => a.addEventListener('mouseenter', highlightLink));