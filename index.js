var rect = require('./rectangle');

function solveRectange(l,b){
	console.log('Solving for Rectangle with l = ' + l +' and b = '+ b);
	if(l<=0 || b<=0){
		console.log('Sorry');
	}
	else{
		console.log("Permeter: " + rect.perimeter(l,b));
		console.log("Area: " + rect.area(l,b));
	}
}

solveRectange(23,23);
solveRectange(3,5);
solveRectange(-1,0);