// export const name = "kevin";

// export function sum(a: number, b: number) {
//     return a + b;
// }

// export default function (){
//     console.log("hello my module");
// }


// export default {
//     name: "kevin",
//     sum(a: number, b: number) {
//         return a + b
//     }
// }

// 如果用module.exports就没有了类型检查，所以要用export
export = {
    name: "kevin",
    sum(a: number, b: number) {
        return a + b;
    }
}