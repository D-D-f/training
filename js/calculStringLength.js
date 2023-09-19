/* Calcul de la longueur d'une chaîne de caractères :
 Écrivez une fonction récursive qui calcule la longueur d'une chaîne de caractères.
*/

const caculLengthString = (name) => {
  const length = name.length;
  let count = 0;

  const calcul = () => {
    count++;

    if (count < length) {
      calcul();
    }

    return count;
  };

  return calcul;
};

const nameLength = caculLengthString("david");
console.log(nameLength());
