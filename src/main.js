import arrow from './arrowFn.js'
import Person from './Person.js'
import greet from './default.js'
import spread from './spread.js'
import literals from './literals.js'
import destructuring from './destructuring.js'

//import {sumTwo, sumThree} from './module.js'   //默认方法导入方法
//import {sumTwo as addTwoNum, sumThree} from './module.js'     //可以自定义导入的方法名称
import * as addition from './module.js'  //可以是用一个统称命名前缀

import arrayFrom from './arrayFrom.js'
import promise from './promises.js'

//使用generator异步编程必须导入babel-polyfill
import "babel-polyfill";
import greeter from './generator.js'

let person = new Person('Sam',18);
alert(person.say());

arrow.receive();
greet("default value hi");
let first = [5,8,9];
alert(literals);
alert("...对象展开运算符 "+spread(...first));

console.log("2+3=", addition.sumTwo(2,3));
console.log("2+3+4=", addition.sumThree(2,3,4));