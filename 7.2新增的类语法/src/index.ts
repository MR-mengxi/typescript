class User {
    readonly id: number // 不能改变
    name: string
    age: number
    gender: "男" | "女" = "男"
    pid?: string

    private publishNumber: number = 3 // 每天一共可以发布多少篇文章
    private curNumber: number = 0 // 当前可以发布的文章数量

    constructor(name: string, age: number) {
        this.id = Math.random();
        this.name = name;
        this.age = age
    }

    publish(title: string) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一篇文章" + title);
            this.curNumber++;
        } else {
            console.log("今日发布文章已经上限");
        }
    }
}

const u = new User("abc", 12);
u.gender = "女"
u.publish("文章1");
u.publish("文章2");
u.publish("文章3");
u.publish("文章4");
u.publish("文章5");
u.publish("文章6");