// Vérification de la présence d'un élément dans un tableau

const includesArray = (arr, elem) => {
  const lengthArray = arr.length;
  let count = 0;

  const include = () => {
    if (count <= lengthArray) {
      if (elem === arr[count]) {
        return elem;
      } else {
        count++;
        include();
      }
    }
    return arr[count];
  };

  return include;
};

const incl = includesArray(["David", "Michel", "Rocky"], "Michel");
console.log(incl());
