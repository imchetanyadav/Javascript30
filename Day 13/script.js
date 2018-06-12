// start with strings, numbers and booleans [copy]
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = 'Wes';
let name2 = name;
console.log(name, name2); // Wes Wes
name = 'wesley';
console.log(name, name2); // wesley Wes

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
console.log(players, team);

// however what happens when we update that array?
team[3] = 'Lux';

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Chetan Yadav',
  age: 80
};

// and think we make a copy:
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// how do we take a copy instead?

// We will hopefully soon see the object ...spread
// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Chetan',
  age: 100,
  social: {
    twitter: '@imchetanyadav',
    facebook: 'imchetanyadav.developer'
  }
};

console.log(wes);

const dev = Object.assign({}, wes);
dev.name = 'Yadav'; // Only updates dev
dev.social.twitter = '@something'; // Will update both dev and wes

const dev2 = JSON.parse(JSON.stringify(wes));