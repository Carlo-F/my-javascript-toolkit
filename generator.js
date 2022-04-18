const sequence = function*(from,to){
    for(let i = from; i<= to; i++) yield i;
};

[...sequence(3,5)] // [3,4,5]
