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