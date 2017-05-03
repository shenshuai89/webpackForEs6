var d = new Promise((resolve, reject) =>{
	setTimeout(()=>{
		if(true){
			resolve('hello world');
		}else{
			reject('no no and reject')
		}
	},2000);
	
});

/*
//分开正常写法
d.then((data) => console.log('success: ', data));

d.catch((error) => console.error('error :', error));
*/

/*
//通过回调函数的方法
d.then((data) => console.log('success: ', data),(error) =>{
	console.error('error :', error);
});
*/

/*
//通过Promise的then的方法
d.then((data) => console.log('success: ', data))
	.then((data) => console.log('success 2:', data))
	.catch((error) => console.error('new error meg: ', error)
);
// success: Hello world
// success 2: undefined
*/

//then中可以传递参数给下一次调用
d.then( (data) => {
	console.log('success: ', data);
	return "successData";
}).then( (data) => {
		console.log('success 2:', data);
}).catch((error) => console.error('new error meg: ', error)
);



export default d;