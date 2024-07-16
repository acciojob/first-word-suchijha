function firstWord(s) {
  let text = s;
const myArray = text.split(" ");
let word = myArray[0];
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
