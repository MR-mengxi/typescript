import { Dictionary } from "./dictionary";

const d = new Dictionary<string, number>();

d.set("a", 1);
d.set("b", 2);
d.set("a", 11);
d.set("c",33);
// console.log(d.has("c"));

d.forEach((k, v) => {
    console.log(`${k}:${v}`);
})

console.log("当前键值对数量"+d.size);
console.log("删除键b");

d.delete("b");


d.forEach((k, v) => {
    console.log(`${k}:${v}`);
})

console.log("当前键值对数量"+d.size);