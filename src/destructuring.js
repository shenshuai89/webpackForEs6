//Destructuring 解构赋值
//ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

//解构赋值变量和后面对象的名称一一对应，不考虑位置先后
/*
var {color, position} = {
	color: "blue",
	name: "John",
	state: "New York",
	position: "Forward"
}

console.log(color);   //blue
console.log(position);   //Forward
*/


//解构赋值可以是一个函数的返回值
function generateObj(){
	return {
		color: "blue",
		name: "John",
		state: "New York",
		position: "Forward"
	}
}

var {name, state} = generateObj();
//也可以使用命名的方式
var {color:myColor, state:myCity} = generateObj();

console.log(name);  //John
console.log(state);   //New York

console.log(myColor);
console.log(myCity);

/*
	对象的解构与数组有一个重要的不同，数组的元素是按照次序排列的，变量的取值由它的位置
	决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
*/
//解构赋值，可以循环遍历一个数组
var people = [
	{
		"firstName":"Clinton",
		"lastName":"ruz",
		"phone":"1121111111",
		"email":"11111@qqq.com",
		"address":"Ap #111"
	},
	{
		"firstName":"Skyler",
		"lastName":"Carrol",
		"phone":"222222222",
		"email":"222222@qqq.com",
		"address":"Ap #222"
	},
	{
		"firstName":"Kylynn",
		"lastName":"ruz",
		"phone":"3333333333",
		"email":"333333@qqq.com",
		"address":"Ap #3333"
	},
	{
		"firstName":"Chaney",
		"lastName":"ruz",
		"phone":"444444444",
		"email":"44444@qqq.com",
		"address":"Ap #444"
	}
]
//通过解构赋值可以把数组中的值遍历处理
people.forEach(({firstName}) => console.log(firstName))

var [,Skyler] = people;
function logEmail({email}){
	console.log(email);
}
logEmail(Skyler);


export default generateObj;