// / Write a function that takes three parameters: a string (str) and two integers (x and y). The function should be able to do the ff:

function stringFunc(str, x, y) {
  const string = str.split("");
  const removedItems = string.splice(0, x).join("");
  let output = string.join("") + removedItems;

  try {
    if (str.length > 25) throw "String should be less than 25 characters!";
    if (x > str.length / 2)
      throw "x should be less than half of string characters!";
    if (y < 3 && y > 0) throw "y should not be between 0 and 3!";
  } catch (err) {
    console.log(err);
    return;
  }

  while (y > 0) {
    output += removedItems;
    y--;
  }

  return output;
}

console.log(stringFunc("stratpoint", 5, 3));
