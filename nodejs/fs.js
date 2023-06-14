const fs = require("fs");

fs.open("./fichiertext.txt", "a+", (err, fd) => {
  if (err) throw err;
  console.log(fd);
  // fs.write(fd, "Bonjour David", (err, written, str) => {
  //   console.log({ err, written, str });
  //   fs.close(fd, (err) => {});
  // });
  const buffer = new Buffer.from(new ArrayBuffer(8), "utf-8");
  let content = "";
  fs.read(fd, buffer, 0, 8, 0, (err, bytesRead, buffer) => {
    content += buffer.toString();

    fs.read(fd, buffer, 0, 8, 8, (err, bytesRead, buffer) => {
      content += buffer.toString();
      console.log({ err, bytesRead, buffer, content });
      fs.close(fd, (err) => {});
    });
  });
});

// Le fd en paramètre permettre d'utiliser un identifiant sur le fichier,
// celui ci permet de savoir quel fichier fermer ou ouvrir.

/* Le a+ en paramètre de open est un flag, le a+ permet de 'a+' : a pour appending 
et + pour lecture.

La méthode write permet d'écrire sur le fichier.
*/
