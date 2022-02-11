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
	console.log("Right here! //settimeout");
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

console.log("\n-----------------------\n");
//SPLIT

let stringThree = "Example amazing beautiful text";
let wordsThree = stringThree.split(" "); // split words using spaces, and create an array
let chartsThree = wordsThree[1].split(""); // split charts in words

console.log(wordsThree[1]); //Amazing
console.log(chartsThree[1]); //m

console.log("\n-----------------------\n");
//spread in function, continue

function race(gold, silver, ...rest) {
	console.log(`GOLD MEDAL GOES TO: ${gold}`);
	console.log(`SILVER MEDAL GOES TO: ${silver}`);
	console.log(`AND THANKS EVERYONE ELSE: ${rest}`);
}

race("Timmy", "Jimmy", "Pimmy", "Elise", "Jason", "Anna");

console.log("\n-----------------------\n");
//destructing arrays

let scoresTwo = [12315, 82314, 32352, 26599, 12941, 55004];

let highScoreTwo = scoresTwo[0];
let secondHighScoreTwo = scoresTwo[1];

let [bronze, silver, gold, ...everyoneElse] = scoresTwo;

console.log(`${bronze}, ${silver}, ${gold} \n(${everyoneElse})`);

console.log("\n-----------------------\n");
//destructing objects

let user = {
	email: "jimmy@gmail.com",
	password: "scAp02xC0",
	firstName: "Jimmy",
	lastName: "Jonas",
	born: 2001,
};

// let userEmail = user.email;
// let userPassword = user.password;

let { email: userEmail, password: userPassword, firstName: userFirstName, lastName: userLastName, born: userBorn } = user;

console.log(`${userFirstName} ${userLastName} - was born in ${userBorn}`);

let user2 = {
	email: "henry@gmail.com",
	firstName: "Henry",
	lastName: "Moreno",
	born: 2001,
};

console.log("\n-----------------------\n");
//default value which is doesnt exist in that object

let { firstName, lastName, email, password = "Hidden" } = user2;

console.log(`${firstName} ${lastName}\n email: ${email}\n password: ${password}`);

console.log("\n-----------------------\n");
//Destructing params

function fullName({ userFirstName, userLastName, password = "Hidden" }) {
	console.log(`${userFirstName} ${userLastName}`);
}

movies.filter(({ score }) => score >= 80);

console.log("\n-----------------------\n");
//movies map

movies.map((movie) => {
	console.log(`${movie.title} is rated ${movie.score}`);
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//DOM

//document.getElementById

// let image = document.getElementById("unicorn");
// let heading = document.getElementById("mainheading");

//document.getElementsByTagName

//let img = document.getElementsByTagName("img");
//let h1 = document.getElementsByTagName("h1");

//document.getElementsByClassName

//let square = document.getElementsByClassName("square");
//let triangle = document.getElementsByClassName("triangle");

//
//document.querySelector
//

//Finds first id example1
//let example1 = document.querySelector("#example1");

//Find first class example2
//let example2 = document.querySelector(".example2");

//Find first h1 tag
//let example3 = document.querySelector("example3");
//Find second h1 tag
//let example4 = document.querySelector("example4:nth-of-type(2)");

//document.querySelector("a[title="Java"]")

//We can use in query selector css methods like nth-of-child or [atribute="something"]

//
//document.querySelectorAll - CHOOSING ALL MATCHING ELEMENTS
//

//const links = document.querySelectorAll("p a"); //anchor tags in paragraphs

//for(let link of links){
// console.log(link.href);
// }
//DISPLAY EVERY LINKS WHICH ANCHOR TAGS HAVE

//attributes

//let firstLink = document.querySelector("a");
//firstLink.href;

//firstLink.getAttribute('href');
//firstLink.setAttribute('href', 'http://example.com');

//style

//let customElement = document.querySelector('.exampleClassName');
//customElement.style.color = 'black';
//customElement.style.fontSize = '3em';
//customElement.style.border = '1px solid white';

//window.getComputedStyle(customElement).fontSize
//"3em"
//window.getComputedStyle(customElement).color
//"black"

//more examples

// let cont = document.querySelector("#container");
// cont.style.textAlign = "center";

// let image = document.querySelector("img");
// image.style.width = "150px";
// image.style.borderRadius = "50%";

//ADD CLASSES

// cont.classList.add('purple');
// cont.classList.add('border');
// cont.classList.remove('purple');
// cont.classList.contains('purple'); //false

//something like switch to ON or OFF class
//if use one time, switch on ON if OFF or reverse

// cont.classList.toggle('purple'); //OFF
// cont.classList.toggle('purple'); //ON
// cont.classList.toggle('purple'); //OFF
// cont.classList.toggle('purple'); //ON

//PARENT & CHILD & SIBLING 

// let square = document.querySelector('.square');

// square.nextSibling; //next element
// square.previousSibling; //previous element

// square.childElement; //child element
// square.parentElement; //parent element
