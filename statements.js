let numbers = [1,2,3,4,5];
let i = 1;
if (typeof numbers === 'object') {
  //do something
};

switch (i) {
  case 1:
    //do something
    break;
  default:
    //do something
    break;
};

while (i < 10 ) {
  i++;
};

for( let number in numbers ) {
  // do something
};

// for/await (ES2018)
async function printStream(stream) {
  for await (let chunk of stream) {
    console.log(chunk);
  }
};

//yield
function* range(from, to) {
  for(let i = from; i <= to; i++) {
    yield i;
  }
}

// try catch finally
try {

}
catch (e) {

}
finally {
  
}

