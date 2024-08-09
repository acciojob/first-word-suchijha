function firstWord(str) {
  str = str.trim();

    // Split the string at the first space
    let words = str.split(' ');

    // Return the first word (or the entire string if there are no spaces)
    return words[0] || str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
