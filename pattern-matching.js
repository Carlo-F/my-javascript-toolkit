let text = "Text to be used for pattern matching, 1, 2, 3";
let pattern = /\d+/g;
let p = new RegExp("s$");

//TEST
pattern.test(text)

//SEARCH
"Javascript".search(/script/ui) // 4 (string found at position 4)
"Python".search(/script/ui) // -1 (string not found)
text.search(pattern)

//MATCH
"7 plus 8 equals 15".match(/\d+/g) // ["7","8","15"]
text.match(pattern)

//REPLACE
text.replace(/pattern matching/gi, "PATTERN MATCHING");
text.replace(pattern, "#")

//SPLIT
"123,456,789".split(",") // ["123","456","789"]










