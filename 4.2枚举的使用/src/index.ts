enum Gender {
    male = "帅哥",
    female = "美女"
}
// 先生 女士    帅哥  美女      male female
let gender: Gender;


gender = Gender.male;
gender = Gender.female;

function printGenders() {
    const vals = Object.values(Gender);
    vals.forEach(v => console.log(v));
}

printGenders();


enum Level{
    level1,
    level2,
    level3,
}

let l:Level = Level.level1;
l = Level.level2;

console.log(l);
