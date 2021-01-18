// interface User {
//     readonly id: string
//     name: string
//     age: number
//     readonly arr: readonly string[]
// }

// let u: User = {
//     id: "12",
//     name: "abc",
//     age: 12,
//     arr:["afh","fah"]
// }


// // const arr: readonly number[] = [1, 2, 3];

// const arr: ReadonlyArray<number> = [1, 2, 3];


interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swin() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
}

let duck: Duck = person;