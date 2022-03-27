let text = "Text to be used for patter matching, 1, 2, 3";
let pattern = /\d+/g;

pattern.test(text)
text.search(pattern)
text.match(pattern)
text.replace(pattern, "#")


let p = new RegExp("s$");

