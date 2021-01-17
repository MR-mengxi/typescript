var Gender;
(function (Gender) {
    Gender["male"] = "\u5E05\u54E5";
    Gender["female"] = "\u7F8E\u5973";
})(Gender || (Gender = {}));
// 先生 女士    帅哥  美女      male female
let gender;
gender = Gender.male;
gender = Gender.female;
function printGenders() {
    const vals = Object.values(Gender);
    vals.forEach(v => console.log(v));
}

printGenders();