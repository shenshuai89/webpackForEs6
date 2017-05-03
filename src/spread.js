// 对象展开运算符


let first = [1,2,3];
let second = [4,5,6];

first.push(...second);
console.log(first);

let addThreeNum = (a,b,c) => a+b+c;

export default addThreeNum;