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
