//模块化导出，没有使用default，就需要使用{}来导出

function sumTwo (a, b){
	return a+b;
}

function sumThree(a, b, c) {
	return a+b+c;
}

export {sumTwo, sumThree}