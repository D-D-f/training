const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.engine("toto", (path, options, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    }
    const template = data.toString().replace("%name", options.name);
    callback(null, template);
  });
});

app.get("/", (req, res) => {
  res.render("index.pug", { name: "jean", authentifacation: true });
});

app.listen(3000);

// Le moteur de template (template engine) dans Node.js est utilisé pour générer du contenu dynamique et rendre des vues HTML côté serveur. Il permet de combiner des données dynamiques avec des modèles statiques pour créer des pages web complètes.

// L'utilisation d'un moteur de template facilite le processus de création de pages web dynamiques en séparant la logique métier et la présentation visuelle. Les développeurs peuvent définir des modèles HTML avec des marqueurs ou des balises spéciales pour indiquer les parties qui seront générées dynamiquement. Ensuite, ces modèles sont combinés avec des données provenant de sources de données telles que des bases de données ou des API.

// Lorsqu'une requête est reçue par le serveur, le moteur de template est utilisé pour rendre le modèle en utilisant les données spécifiques pour cette requête. Les valeurs dynamiques sont insérées dans les emplacements appropriés du modèle, et le résultat final est renvoyé au client sous forme de réponse HTML complète.

// Les moteurs de template populaires pour Node.js incluent des options telles que Handlebars, EJS (Embedded JavaScript), Pug (anciennement Jade), et Mustache. Chacun de ces moteurs de template a sa propre syntaxe et fonctionnalités spécifiques, mais tous servent à la même fin générale de rendre des vues dynamiques côté serveur dans une application Node.js.
