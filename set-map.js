//SET
let s = new Set();
let unique = new Set("Mississipi"); // 'M','i','s','p'
unique.size; // 4
unique.add('o');
unique.delete('M');
unique.has('M'); // false
unique.clear();
unique.size; //0

//MAP
let n = new Map([
   ["one", 1],
   ["two", 2]
 ]);

n.size; // 2
n.set("three", 3);
n.get("three"); // 3
n.has("two"); //true
n.delete("three") // true
[...n.keys()] // ["one","two"]
[...n.values()] // [1,2]
n.clear();
