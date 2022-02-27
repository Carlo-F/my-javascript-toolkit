const letters = ['a', 'b', 'c', 'd', 'e'];
const moreLetters = ['f', 'g', 'h', 'i', 'j'];
const numbers = [1, 2, 3, 4, 5];
const fruits = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];
const queryString = 'app';

// JavaScript useful methods

const upperCaseLetters = letters.map(letter => letter.toUpperCase());

const evenNumbers = numbers.filter(number => number % 2 == 0);

// filter by query string i.e. user search
const apples = fruits.filter(fruit => fruit.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);

const bananas = fruits.find(fruit => fruit.name === 'bananas');
const indexOfBanans = fruits.findIndex(fruit => fruit.name === 'bananas');
const someFruitsAreFinished = fruits.some(fruit => fruit.quantity === 0);
const everyFruitIsAvailable = fruits.every(fruit => fruit.quantity > 0);

const orderedFruitsByQuantity = fruits.sort((a, b) => b.quantity - a.quantity);

const total = numbers.reduce((a, b) => a + b, 0);

const longerAlphabet = letters.concat(moreLetters);
