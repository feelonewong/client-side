// boolean
let bool: boolean = false;
bool = true;


//number
let num: number = 123;
//string
let str: string = `this is ${num}`;
console.log(str);

//arr
//写法1
let arr: number[] = [];
arr = [1, 2, 3];
console.log(arr);
//写法2
let arr2: Array<Number> = [];
arr2 = [23, 45, 67];
console.log(arr2);
//写法3联合类型
let arr3: (string | number)[] = [1, 2, 3, "hello"];
console.log(arr3);

//元祖  固定长度 固定位置类型
let tuple: [string, number, boolean];
tuple = ["hello", 213, false];
console.log(tuple);

//枚举 每一个名字都对应一个索引值
enum Roles {
    admin = 8,
    super_admin,
    user
}

console.log(Roles.user);

//any 任意类型
const arr4: any[] = [1, 2, 3, 4, false, "str"];

//void类型
//什么类型都不是
const consoleText = (text: string): void => {
    console.log(text);
};
let v: void;
v = null;
consoleText("abc");


//null undefined
let n: null = null;
let u: undefined = undefined;

//never类型
const errorFunc = (message:string):never=>{
    throw new Error(message)
}

const infiniteFunc = ():never=>{
    while (true){

    }
}

//obj
function getObject(obj:object):void{
    console.log(obj)
}
let obj = {
    name:'wallen'
}
getObject(obj)

//类型断言
const getLength = (value:string|number)=>{
    if( (value as string).length===0 || (value as string).length){
        console.log((value as string).length);
    }else{
        console.log(value.toString().length);
    }
}
getLength('')