// interface User{
//     name:string
//     age:number
//     sayHello():void
// }


// // type User = {
// //     name: string
// //     age: number
// //     sayHello: () => void
// // }

// let u: User = {
//     name: "abc",
//     age: 23,
//     sayHello() {
//         console.log("abc");
//     }
// }


// type Condition = (n: number) => boolean

// interface Condition {
//     (n: number): boolean
// }

// function sum(numbers: number[], callBack: Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if (callBack(n)) {
//             s += n;
//         }
//     })
//     return s;
// }

// const result = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
// console.log(result);



// interface A {
//     T1: string
// }

// interface B {
//     T2: number
// }

// interface C extends A, B {
//     T1:number
//     T3: boolean
// }


type A = {
    T1: string
}

type B = {
    T2: number
}

type C = {
    T1: number
    T3: boolean
} & A & B

// let u: C = {
//     T1: "abc",
//     T2: 123,
//     T3: true
// }