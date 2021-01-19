interface hasNameProperty {
    name: string
}

/**
 * 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
 * @param obj 
 */
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
    obj.name = obj.name.split(" ")
        .map(s => s[0].toUpperCase() + s.substr(1))
        .join(" ");
    return obj;
}

const o = {
    name: "kevin yuan",
    age: 23,
    gender: "男"
};

const newO = nameToUpperCase(o);

console.log(newO.name);