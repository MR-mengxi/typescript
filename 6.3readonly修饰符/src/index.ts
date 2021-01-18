interface User {
    readonly id: string
    name: string
    age: number
    readonly arr: readonly string[]
}

let u: User = {
    id: "12",
    name: "abc",
    age: 12,
    arr:["afh","fah"]
}


// const arr: readonly number[] = [1, 2, 3];

const arr: ReadonlyArray<number> = [1, 2, 3];
