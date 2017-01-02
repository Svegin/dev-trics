const dogs = [{name: 'Snickers', age: 3}, {name: 'Barsick', age: 8}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#bada55';
  p.style.fontSize= '50 px';
}

// regular
console.log('hello');

// interpolated
console.log('hello, I am a %s string!', '👔');

// styled
console.log('%c I have great text', 'font-size: 40px; background:grey; text-shadow: 3px 3px 0 white');

// warning
console.warn('o-o-o-o');

// error
console.error('stop');

// info
console.info('👖');

// testing
const p = document.querySelector('p');
console.assert(p.classList.contains('fu'), 'that is wrong');

// clearing
console.clear();


// viewing DOM elements
console.log(p);
console.dir(p);

console.clear();

// groupinng together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is  ${dog.name}`);
  console.log(` ${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('eu');
console.count('eu');
console.count('eu');
console.count('eu');
console.count('eu');

// timeing
console.time('fetching data');
fetch('https://api.github.com/users/svegin')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

  // table
  console.table(dogs);
