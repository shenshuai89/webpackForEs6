// Array.from 将对象转换为数组

const products = Array.from(document.querySelectorAll('.product'));

products.filter( product => parseFloat(product.innerHTML) < 10)
		.forEach( product => product.style.color = 'red');

console.log(products);
console.log('arrP ' +  (products instanceof Array) );   /// true

export default products;