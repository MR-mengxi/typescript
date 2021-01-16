function isOdd(n: number) {
    return n % 2 !== 0;
}

// let num :number[] = [1,2,3];
let num: Array<number> = [1, 2, 3];


function printValues(obj: object) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}

printValues({
    name: "abc",
    age: 124
});

// let n:string = undefined;

// 联合类型
// let name :string |undefined;

// void类型
function printMenu() {
    console.log("1. 登录");
    console.log("2. 注册");
}

// never类型
function throwError(msg: string): never {
    throw new Error(msg);
}

function alwaysDoSomething(): never {
    while (true) {
        // ....
    }
}


// 字面量类型
let gender: "男" | "女";

gender = "女";
gender = "男";

let arr: []; // arr永远只能取值为一个空数组

let user: {
    name: string
    age: number
}

user = {
    name: "abc",
    age: 124
}


// 元祖类型
let tu: [string, number];
tu = ["2", 3];

// any类型
let data: any = "angjs";
let numb: number = data;