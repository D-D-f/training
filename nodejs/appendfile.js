const fs = require("fs");

fs.readFile("./fichiertext.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

/* Contrairement à la méthode read, on récupère le buffer directement dans data
et j'ai juste a utiliser to string pour le transformer en chaine de caractere.
Le fd est également utiliser en interne dans la fonction
*/

fs.appendFile("./fichiertext.txt", "ma nouvelle data", (err) => {
  if (err) throw err;
});

/* Permet d'ajouter de la data également dans des fichiers */

fs.unlink("./fichiertext.txt", (err) => {});

/* Permet de supprimer un fichier */
