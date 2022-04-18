const sequence = function*(from,to){
    for(let i = from; i<= to; i++) yield i;
};

[...sequence(3,5)] // [3,4,5]

function* oneDigitPrimes(){
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

function* sequence(...iterables) {
    for(let iterable of iterables) {
        yield* iterable;
    }
}

[...sequence("abc", oneDigitPrimes())] // ["a,"b","c",2,3,5,7]
