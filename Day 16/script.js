const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a,b) => {
  a = a.replace(/a |an |the /gi, '');
  b = b.replace(/a |an |the /gi, '');
  return a > b ? 1 : -1;
});

document.querySelector('#bands').innerHTML =
  bands
    .map(band => `<li>${band}</li>`)
    .join('');