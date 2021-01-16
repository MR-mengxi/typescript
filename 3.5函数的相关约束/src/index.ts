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


// 类型别名
type Gender = "男" | "女"
type User = {
    name: string
    age: number
    gender: Gender
}

let u: User;

u = {
    name: "abc",
    age: 23,
    gender: "男"
}

function getUsers(g: Gender): User[] {
    return [];
}

getUsers("女");


// 函数的相关约束

/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number;
/**
 * 得到a和b拼接的结果
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a和b必须是相同的类型");
}

const result = combine(3, 3);



function sum(a: number, b: number, c?: number) {
    if (c) {
        return a + b + c;
    } else {
        a + b;
    }
}

sum(3, 4);
sum(3, 4, 5);