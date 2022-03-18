//dictionary
const dictionary = new Map([
    ['a', '4'],
    ['b', '8'],
    ['c', 'c'],
    ['d', 'd'],
    ['e', '3'],
    ['f', 'f'],
    ['g', '6'],
    ['h', 'h'],
    ['i', '1'],
    ['j', 'j'],
    ['k', 'x'],
    ['l', '2'],
    ['m', 'm'],
    ['n', 'n'],
    ['o', '0'],
    ['p', 'p'],
    ['q', 'q'],
    ['r', 'r'],
    ['s', '5'],
    ['t', '7'],
    ['u', 'u'],
    ['v', 'v'],
    ['w', 'w'],
    ['x', 'x'],
    ['y', 'y'],
    ['z', 'z']
]);

const text = `
Il leet (o anche l33t, 31337 o 1337) è una forma codificata di inglese caratterizzata dall'uso di caratteri non alfabetici 
al posto delle normali lettere (scelte per la semplice somiglianza nel tratto) o piccoli cambi fonetici.

Il termine ha origine dalla parola "élite", che in inglese si pronuncia in modo simile a "leet", 
e si riferisce al fatto che chi usa questa forma di scrittura si distingue da chi non ne è capace.
`;
let result = '';

[...text].forEach(el => {
    if(dictionary.get(el)) {
        result = result.concat(dictionary.get(el));
    } else {
        result = result.concat(el);
    }
});
console.log(result);
