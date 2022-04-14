// Numbers
let pounds = Intl.NumberFormat("en", {style:"currency", currency: "GBP"});
pounds.format(1000);

// DateTime
let d = new Date("2020-01-02T13:14:15Z");
Intl.DateTimeFormat("en-US").format(d); // "1/2/2020"

let opts = {weekday:"long", month:"long", year:"numeric", day:"numeric"};
Intl.DateTimeFormat("en-US", opts).format(d); //"Thursday, January 2, 2020"

// language-sensitive string comparison
const collator = new Intl.Collator().compare;
["a","z","A","Z"].sort(collator) // ["a","A","z","Z"]
