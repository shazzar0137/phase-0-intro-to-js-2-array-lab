// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  console.log(cats);
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
console.log(cats)

  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  destructivelyRemoveLastCat(2)
  console.log(cats);
  
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  destructivelyRemoveFirstCat(0)
  console.log(cats);

  function appendCat(name) {
    return [...cats, name]; // Returns a new array, does not modify `cats`
  }
  console.log(cats);

  function prependCat(name) {
    return [name, ...cats]; 
  }
  console.log(cats);

  function removeLastCat() {
    return cats.slice(0, -1)
  }
  console.log(cats);
  
  
  function removeFirstCat() {
    return cats.slice(1); 
  }
  console.log(cats);