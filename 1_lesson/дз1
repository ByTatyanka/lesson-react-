// №1

let callback = ( i = 0) => {
	console.log (i) 
}
let loop = (times = 0, callback = null) => {
	if (callback !== null) {
		for( let i = 0; i < times; i++) {
			callback(i)
		}
	}

}

// №2

let calculateArea = (figure, arg) => {


	triangle = (arr) => {

		let [a,b,c] = arr
		if (a + b > c && a + c > b && b + c > a){
			let p = ( a + b + c)/2;
			let s = Math.sqrt(p * (p-a) * (p-b) * (p-c));
			let  obj = { arg : arr, s }
			return obj
		}
		
	}


	box = (arr) => {
		let [a,b] = arr
		if (a > 0 && b > 0){
			var  obj = { arg : arr, s : (a * b)}
			return obj
		}
	}

	switch ( figure ) {
		case 'box':
			console.log(box(arg))
			break
		case 'triangle':
			console.log(triangle(arg))
			break;
	}
}