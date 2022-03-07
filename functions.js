// rest parameters
function max(first, ...rest) {
  let maxValue = first;
  
  for(let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  
  return maxValue;
}

//function property

uniqueInteger.counter = 0;

function uniqueInteger() {
  return uniqueInteger.counter++;
}

//Closure
let  uniqueInteger = (function() {
  let counter = 0;
  return function() { return counter++; };
}());
uniqueInteger();
uniqueInteger();

//High order function
function compose(f,g) {
  return function(...args) {
    return f.call(this, g.apply(this.args));
  };
}

//Memoization
const memoize = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}

const addMemo = memoize();
addMemo(2); // Calculating result..
addMemo(3); // Calculating result..
addMemo(2); // Fetching from cache..
