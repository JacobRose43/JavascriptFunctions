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

// square.nextSiblingElement; //next element
// square.previousSiblingElement; //previous element

// square.childElement; //child element
// square.parentElement; //parent element

//!!!! DOM NODE & HTML elements

//APPEND & APPEND CHILD

// const newImg = document.createElement("img");
// newImg.src =
// 	"https://images.unsplash.com/photo-1643075621108-00ddbe129d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

// document.body.appendChild(newImg);
// newImg.style.width = "30%";
// newImg.classList.add('square);

// let newH3 = document.createElement("h3");
// newH3.innerText = "I am H3! Hello!";
// document.body.appendChild(newH3);

//let p = document.querySelector('p); // <- exist, output: Hello, we have really nice day today!
// p.append(" I am new in this paragraph");
// p; //output: Hello, we have really nice day today! I am new in this paragraph
// p.append(" I am new in this paragraph ", "Hello there! ", "Another text! ");

//prepend = adding of begining

// let b = document.createElement('b);
// newB.append("Hi! ");
// p.prepend(b); output: Hi! Hello, we have really nice day today! I am new in this paragraph (...);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//insert.AdjacentElement;  !IMPORTANT

// targetElement.insertAdjacentElement(position, element);

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

//after - insert element after another element

// h1.after(h3); // h3 after h1

//appendChild loop - creating 100 buttons

// let container = document.querySelector("#container");

// for (let i = 0; i < 100; i++) {
// 	let newButton = document.createElement("button");
// 	newButton.innerText = "Hey!";
// 	container.appendChild(newButton);
// }

// removeChild & remove

// let firstLi = document.querySelector('li');
// let ul = firstLi.parentElement;

// ul.removeChild(firstLi);
//removing child element inside div or anything else.

// ul.remove();
// methods, removes the object from the three it belongs to, just remove itselt (choosen element);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Creating page with 100 images of pokemon

// let container = document.querySelector("#container");
// let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// for (let i = 0; i <= 151; i++) {
// 	let newImg = document.createElement("img");
// 	let label = document.createElement("div");
// 	let pokemon = document.createElement("span");
// 	label.innerText = `#${i}`;
// 	newImg.src = `${baseUrl}${i}.png`;

// 	pokemon.appendChild(newImg);
// 	pokemon.appendChild(label);
// 	container.appendChild(pokemon);

// 	let divs = document.querySelector("div");
// 	divs.style.display = "inline-block";
// 	divs.style.textAlign = "center";
// 	newImg.style.display = "block";
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//EVENTS

//inline EVENTS

// FIRST option - bad

// <button onclick="alert('you clicked me!'); alert('stop clicking!')"></button>

// SECOND option - mehh

// document.querySelector('btn');
// btn.onclick = function () {
// 	console.log("You clicked me!");
// 	consol.log("aaaaaaaa click click click!!");
// };

// function scream() {
// 	console.log("AAAAAAAA");
// }

// btn.onmouseenter = scream;

// !!!IMPORTANT

// btn.onclick = firstText; //function named firstText - console.log('red');
// btn.onclick = secondText; //function named secondText - console.log('blue');
// IN CONSOLE, WE CAN SEE ONLY "BLUE" TEXT, BECAUSE firstText is overwritten by secondText, LIKE IN CSS
// for example css:
// .text{
//		color: red;
// 		color: blue;
// } //text is blue, never was red;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//THIRD option - BESTTTT

// btn.addEventListener('click', ()=> {
//	console.log("clicked!");
// })

// let hello = document.querySelector("#hello");
// let goodbye = document.querySelector("#goodbye");

// hello.addEventListener("click", () => {
// 	console.log("hello");
// });

// goodbye.addEventListener("click", () => {
// 	console.log("goodbye");
// });

// btn.addEventListener('click', twist, { once: true });
// can be used only one time (refresh and function again working only for one click);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Keyboard Events & Events Objects

// btn.addEventListener("click", function (event) {
// 	console.log(event); //Display info about event (click), for example coordinates where mouse being clicked
// });

// examples:

// console.log(event.key) // clicked "e" // console: e
// console.log(event.target) //!!!!!!!!!!!! console: KeyE

// console.log(event.key) // clicked "space" // console:
// console.log(event.target) //!!!!!!!!!!!!!!!! console: Space

// console.log(event.key) // clicked "left shift" // console: Shift
// console.log(event.target) //!!!!!!!!!!!!!!!!!!!!! console: ShiftLeft

// window.addEventListener('keydown', function (e) {
// 	switch (e.code){
// 		case 'ArrowUp':
//      	console.log("UP!");
//			break;
// 		case 'ArrowDown':
//      	console.log("DOWN!");
//  		break;
// 		default:
//      	console.log("ignore..");
//  		break;
// 	}
// })

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// FORM EVENTS & PreventDefault

//
// const form = ~~~~~~;
// const input = ~~~~;
// const list = ~~~~;

// form.addEventListener("submit", function (e) {
// 	e.preventDefault();
// })

// form action doesnt moves us on another page, SO
// we can still do anything on current page

//
// element.value; // getting value of input or something else
// if input type text, has typed "Hello"
// using element.value we get the returned values
//

//
// Simple example - adding task to list Event Function:
//

// const form = document.querySelector('form');
// const product = document.querySelector('#product');
// const qty = document.querySelector('#qty');
// const list = document.querySelector('#list');

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//    let aValue = product.value;
//    let bValue = qty.value;
//    let newLi = document.createElement("li");
//    newLi.innerText = `${bValue} ${aValue}`;
//    list.appendChild(newLi);
//    product.value = "";
//    qty.value = "";
// });

// INPUT change events

// input.addEventListener("change", function(e){
// 	let inValue = input.value;
// 	console.log('inValue');
// })

// EXAMPLE with method 'input'

// let h1 = document.querySelector("h1");
// const h1Text = h1.innerText;

// let username = document.querySelector("#username");

// username.addEventListener("input", function (e) {
// 	let inputValue = username.value;
// 	if (inputValue !== "") {
// 		h1.innerText = `Welcome, ${inputValue}`;
// 	} else {
// 		h1.innerText = h1Text;
// 	}
// });

// MATH RANDOM MIN AND MAX AMOUNT OF RANDOM GENERATE

// 125 - MIN
// 255 + 125 = MAX
// 380

// for (let i = 0; i < 110; i++) {
// 	let xcz = Math.floor(Math.random() * 255 + 125);
// 	console.log(xcz);
// }

//
//
// STOP BUBBLING MORE EVENTS FROM CONTAINER DIV OR ANOTHER MARKUP
// EXAMPLE

// button.addEventListener("click", function (e) {
// 	container.style.backgroundColor = randomColor();
// 	e.stopPropagation(); // THAT STOPED ANOTHER EVENTS EXECUTE
// });

// container.addEventListener("click", function (e) {
// 	container.classList.toggle("Hide");
// });
