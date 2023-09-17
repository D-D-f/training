// Inversion d'un tableau :

const reverseArray = (arr) => {
  let length = arr.length - 1;
  const count = 0;
  const newArray = [];

  const reverse = () => {
    if (count === length) {
      newArray.push(arr[length]);
    } else {
      newArray.push(arr[length]);
      length--;
      reverse();
    }
    return newArray;
  };

  return reverse;
};

const test = reverseArray([1, 2, 3, 4, 5]);
console.log(test());
