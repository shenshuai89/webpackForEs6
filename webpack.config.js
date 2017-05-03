module.exports = {
	//使用es6的Generator异步编程时，安装需要安装"babel-polyfill",并且调用
	//正常默认不使用Generator异步编程  entry: './src/main.js',  即可
	entry: ["babel-polyfill",'./src/main.js'],
	output: {
		path:__dirname,
		filename: 'dist/bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader:'babel-loader',
				exclude: /node_modules/,
				include: /src/,
				query:{
					presets:['latest']
				} 
			}
		]
	}
		
}