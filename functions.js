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
