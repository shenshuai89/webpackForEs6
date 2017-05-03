//作为默认模块导出，不需要给模块添加大括号

let receive = ( complete =() => console.log("complete")) =>	complete();

receive();

function greet(greeting, name="John") {
	console.log(greeting +','+ name);
}

greet("hello");


export default greet;