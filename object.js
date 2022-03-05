let o = new Object();
let empty = {}; // Inherits methods from Object.prototype
let o1 = Object.create({x:1, y:2});
let o2 = Object.create(o1) // Inherits from o1 and from Object.prototype

let o3 = o1?.x; //ES2020 conditional access

delete o3.x; // returns true

"x" in o1; // true
o1.hasOwnProperty("x"); // true
o1.propertyIsEnumerable("x"); //true

Object.assign(o2, defaults);

let string = JSON.stringify(o1);
let parse = JSON.parse(string);

let s = o1.x.toString();
let spread = {...o1};

const extension = Symbol("my ext symbol");
let o4 = {
  [extension]: { }
};

let square = {
  area() { return this.side * this.side; },
  side: 10
};

//getter and setter
let o5 = {
  dataProp: value,
  
  get accessorProp() {return this.dataProp;},
  set accessorProp(value) {this.dataProp = value;}
};
