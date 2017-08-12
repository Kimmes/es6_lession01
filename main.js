// alert('Hello!');

		// document.write('Hello 02!')
		
		// console.log('Hello 03!');
		
		// var a = 10;

		// var b = 'name';
		// console.log(b);

		// var _c = 5;


		// var d = null;
		// console.log(null);

		// var arr = {};
		// console.log('arr');

		// var arr = {age: 23, name: 'Nhungdt'};
		// console.log(arr);
		// //or
		// console.log(arr.age + ' - ' + arr.name);

		// var numB;
		// console.log(numB);
		
// ternary operator
// var age = 23;		
// age == 32 ? 'My name is Nhung' : 'It is not my name';

// If else
// var numA = 80;
// 
// if(numA > 20 && numA <= 60){
// 	console.log('You are old enough!');
// } else if (numA > 60){
// 	console.log('you are too odd');
// } else{
// 	console.log('You are too young!');
// }


var weight = 41;
var height = 155;
var BMI = weight/(height*height);
if (BMI < 18.5) {
	console.log('Thin');
} else if(BMI >= 18.5 && BMI < 25){
	console.log('Normal');
}else{
	console.log('Fat');
}

var weight = 41;
var height = 155;
var BMI = weight / Math.pow(height, 2) * 10000;
if (BMI < 18.5) {
	console.log('Thin');
} else if(BMI >= 18.5 && BMI < 25){
	console.log('Normal');
}else{
	console.log('Fat');
}



