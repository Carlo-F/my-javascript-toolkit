let empty = [];
let primes = [2,3,5,7,11];
let a = new Array();
let copy = Array.from(primes);

copy.slice(0,3);
copy.splice(7);
copy.fill(9,2);
primes.include(2); //true

primes.sort();
primes.sort((a,b) => b -a);
primes.reverse();

copy.join(" ");

Array.isArray([1,2,3]); //true
