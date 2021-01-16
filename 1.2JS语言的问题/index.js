function getUserName() {
    if (Math.random() < 0.5) {
        return "yuan jin";
    }
    return 404;
}

let myname = getUsername();
mynema = myname.split(" ")
    .filter(it => it)
    .map(it => it[0].touppercase() + it.subStr(1))
    .join(" ");


// js中可以随时改变变量的类型
let width = 500;
// .....

width = "500px"; // 埋雷
// .....

document.getElementById("xxx").style.width = width + "px";