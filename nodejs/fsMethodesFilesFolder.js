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

fs.mkdir("./mondossier", { recursive: true }, (err) => {});
/* Permet de créer un dossier, recursive permet de créer un dossier 
dans le dossier même si celui ci n'existe pas */

fs.rmdir("./mondossier", (err) => {});
// Permet de supprimer un dossier

fs.readdir("./mondossier", (err, files) => {
  console.log(files);
});

// Il récupère dans un array les fichiers dans un dossier
