// function take<T>(arr: T[], n: number): T[] {
//     if (n >= arr.length) {
//         return arr;
//     }
//     const newArr: T[] = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// const result = take<number>([2, 3, 4, 5], 2);


// 回调函数：判断数组中的某一项是否满足条件
// type callback<T> = (n: T, i: number) => boolean
interface callback<T> {
    (n: T, i: number): boolean
}

function filter<T>(arr: T[], callback: callback<T>): T[] {
    const newArr: T[] = [];
    arr.forEach((n, i) => {
        if (callback(n, i)) {
            newArr.push(n);
        }
    });
    return newArr;
}

const arr = [3, 4, 5, 6, 7];
console.log(filter(arr, n => n % 2 !== 0));