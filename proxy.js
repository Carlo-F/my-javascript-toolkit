//let proxy = new Proxy(target, handlers);

let t = { x:1, y:2 }
let p = new Proxy(t, {});

p.x // 1
delete p.y
t.y // undefined
p.z = 3
t.z // 3
