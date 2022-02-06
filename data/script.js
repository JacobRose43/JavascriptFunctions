//FUNCTIONS

//first letter to uppercase

function capitalize(text) {
	let letter = text.slice(0, 1);
	text = letter.toUpperCase() + text.substring(1);
	return text;
}

capitalize("eggplant");
capitalize("pamplemousse");
capitalize("squid");

//lastelement of array

function lastElement(x) {
	if (x.length === 0) {
		return null;
	}
	return x[x.length - 1];
}

lastElement([3, 5, 7]);
lastElement([1]);
lastElement([]);

//day of the week

function returnDay(x) {
	if (x >= 1 && x <= 7) {
		let days = {
			1: "Monday",
			2: "Tuesday",
			3: "Wednesday",
			4: "Thursday",
			5: "Friday",
			6: "Saturday",
			7: "Sunday",
		};
		return days[`${x}`];
	} else {
		return null;
	}
}
returnDay(1);

//Sum Array

function sumArray(x) {
	let total = 0;
	for (let e in x) {
		total += x[e];
	}
	return total;
}

sumArray([1, 2, 3]);

//FUNCTION EXPRESSION

let square = function (num) {
	return num * num;
};

square(5);

//FACTORY FUNCTION

function makeBetweenFunc(min, max) {
	return function (num) {
		return num >= min && num <= max;
	};
}

let isChild = makeBetweenFunc(0, 18);

isChild(15);
isChild(19);

let isAdult = makeBetweenFunc(19, 64);

isAdult(25);
isAdult(88);

//defining methods //function

// let myMethods = {
// 	multiply: function (num) {
// 		return num * num;
// 	},
// 	signature: function (message) {
// 		return message + " //Jacob Rose";
// 	},
// };

//easiest way to write same thing

let myMethods = {
	multiply(num) {
		return num * num;
	},
	signature(message) {
		return message + " //Jacob Rose";
	},
};

myMethods.multiply(6);
myMethods.signature("Have a great day!");

//another example

let mySquare = {
	area(side) {
		return side * side;
	},
	perimeter(side) {
		return side * 4;
	},
};

mySquare.area(10);
mySquare.perimeter(10);

//THIS KEYWORD

//example with object and method

let hen = {
	name: "Helen",
	eggCount: 0,
	layAnEgg() {
		this.eggCount += 1;
		return "EGG";
	},
};

hen.name; // Helen
hen.eggCount; // 0
hen.layAnEgg(); // EGG
hen.layAnEgg(); // EGG
hen.eggCount; // 2

//TRY & CATCH

try {
	fullNameOfUser.toUpperCase();
} catch {
	console.log("fullNameOfUser doesn't exist, try something different");
}

// ...in function

function yall(msg) {
	try {
		console.log(msg.toUpperCase().repeat(3));
	} catch (e) {
		//e - ERROR in string form (?)
		console.log(e);
		console.log("You have to put string next time!");
	}
}

yall(1224);
yall("Hello there!");

//map method

let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map(function (n) {
	return n * 2;
});

let movies = [
	{
		title: "Amadeus",
		score: 70,
	},
	{
		title: "Star",
		score: 46,
	},
	{
		title: "Heroes",
		score: 66,
	},
	{
		title: "Colombiana",
		score: 89,
	},
	{
		title: "Avengers",
		score: 95,
	},
];

let moviesTitles = movies.map(function (movie) {
	return movie.title.toUpperCase();
});

//arrow functions

let squareArea = (x) => {
	return x * x;
};

let sum = (x, y) => {
	return x + y;
};

//except {} u can use (), when arrow function return only one thing
//in formatting, the parentheses are removed
//parentheses ()

let rollDie = () => math.floor(Math.random() * 6) + 1;

//setTimeout and setInterval

setTimeout(() => {
	console.log("Right here!");
}, 3000);

console.log("\n-----------------------\n");

const idOfInterval = setInterval(() => {
	console.log("Im in loop right now!");
}, 3000);

clearInterval(idOfInterval);
console.log("Interval Here, current: stopped");

//filter method

let numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbersA.filter((n) => {
	return n <= 5;
});

// let highestRatedMovies = movies.filter((m) => {
// 	return m.score > 80;
// });

//easiest way of this ^

let highestRatedMovies = movies.filter((m) => m.score > 80);

//some & every methods

let words = ["dog", "jelly", "bird", "onion", "apple", "biscuits"];

//every element
words.every((word) => word[0] === "b"); //false

//any element
words.some((word) => {
	return word.length < 4;
}); //true

//another example

function allEvens(numbers) {
	return numbers.every((n) => {
		return n % 2 === 0;
	});
}

allEvens([2, 4, 6, 8]); //true
allEvens([1, 2, 3, 4]); //false

//reduce method

[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => {
	return a + b;
});

let topRatedMovies = movies.reduce((bestMovie, currMovie) => {
	if (currMovie.score > bestMovie.score) {
		return currMovie;
	}
	return bestMovie;
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//NEWER JavaScript Features

function defaultParam(num) {
	// if (num === undefined) {
	// 	num = 6;
	// }
	// easiest way of this ^
	num = typeof num === undefined ? (num = 6) : (num = num);

	return Math.floor(Math.random() * num) + 1;
}

console.log("\n-----------------------\n");

//IF STATEMENT
let result1 = 10 > 5 ? "yes" : "no";
console.log(result1); // 👉️ 'yes'

let result2 = 10 > 100 ? "yes" : "no";
console.log(result2); // 👉️ 'no'

console.log("\n-----------------------\n");

//spread in function calls

let numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbersTwo);
console.log(...numbersTwo);
