function* generator(){
	console.log(` Generators are "lazy" `);
	yield "How";
	console.log(` I'm not called until the second next `);
	yield "are";
	console.log(`Call me before "you"?`);
	yield "you?";
	console.log(`Called when "done" `);
}

function* graph(){
	let x = 0;
	let y = 0;
	while(true){
		yield {x:x, y:y}
		x += 2;
		y += 1;
	}
}

let greeter = generator();

//或者使用for  of直接遍历,但是只能执行一遍，如果next()最后，done为真了，就无法取到值。
/*
for(let word of greeter){
	console.log(word);
}
*/

console.log("How: "+greeter.next().value);  //
//greeter.next();
let next = greeter.next().value;
console.log('are: '+next);
//greeter.next();
let done = greeter.next().value;
console.log("you: "+done);
greeter.next();



var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);

export {generator, graph};
