const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// Add breakpoint and test which js code is modifying the element
// Right click element, click Break on - Attribute modifications
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
  console.log('Regular console log');

// Interpolated
  console.log('Hello I am a %s string!', '😄'); // Add string in place of %s

// Styled
  console.log('%c Styled text', 'color:white; background:red;') // Add CSS to any text coming after %c

// Warning!
  console.warn('Warning!'); // To show warning messages with stack trace

// Error :|
  console.error('Error!'); // To show error messages with stack trace

// Info
  console.info('Info!'); // To show info messages

// Testing
  const p = document.querySelector('p');
  console.assert(p.classList.contains('ouch'), 'Class is not added!'); // Only prints second argument as error if first argument is false

// Clearing
  // console.clear(); // Clear console

// Viewing DOM Elements
  console.log(p); // Prints dom element object
  console.dir(p); // Prints dom element drop-down, helpful to view element properties and methods

// Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`); // can use group() if don't want to collapse groups initially
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  });

// Counting
  console.count('Wes'); // helps to see how many times this has been called
  console.count('Wes');

// Timing
  console.time('fetching data');
  fetch('https://api.github.com/users/imchetanyadav')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data'); // print this with how much time it took to fetch data
      console.log(data);
    });

// Table
  console.table(dogs);