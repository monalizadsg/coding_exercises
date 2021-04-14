// Write a function that takes an array and returns the size of the array of strings, the index of the longest element in the array and what the longest element is.

function findLongestElement(arr) {
  let longest = arr[0];

  for (let item of arr) {
    if (item.length > longest.length) longest = item;
  }

  const longestIndex = arr.findIndex((item) => item === longest);

  const output = {
    "Size of array": arr.length,
    "Index of longest element": longestIndex,
    "Longest element": longest,
  };

  return output;
}

console.log(findLongestElement(["One", "Twenty-seven", "Three"]));
