//字面量中的所有格式都会被保留，包括空格和和换行
var salutation = "Hello ";
var place = "planet";
var greeting = `${salutation},  
	you 
		crazy 	${place}   
   boy`;

//字面量中的计算会得到一个最后的结果
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x+y}`

//用于返回字面量的数组
function tag(strings, ...values){
	console.log(strings);
	console.log(values);
	if(values[0]<20){
		values[1] = "awake";
	}else{
		values[1] = "sleepy";
	}
	return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

/*
strings[0]  => It's
strings[1]  => I'am
values[0]  => new Date(),getHours
values[1]  => ${""}
*/
var message = tag`It's ${ new Date().getHours() }  I'am ${''}`


console.log('`字面量`'+greeting);
console.log('`字面量`'+equation);
console.log('`字面量`'+message);


export default equation;