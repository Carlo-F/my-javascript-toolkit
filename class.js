class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  
  includes(x) { return this.from <= x && x <= this.to; }
}

let r = new Range(1,3);
r.includes(2); // true
