// Write a function that takes an array and returns the contents as an array of objects, with keys index and value.

function convertToArrayOfObjects(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const index = i;
    const value = arr[i];

    const obj = {
      index,
      value,
    };

    output.push(obj);
  }
  return output;
}

console.log(convertToArrayOfObjects(["Apple", "Samsung", "Huawei"]));
