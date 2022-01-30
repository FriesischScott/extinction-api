const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1", "http://localhost"],
  })
);

app.get("/mammals", (req, res) => {
  res.send({
    extinct: [
      "Wisent",
      "Auerochse",
      "Wildpferd",
      "Ostigel",
      "Bayerische Kleinwühlmaus",
      "Langflügelfledermaus",
      "Europäischer Nerz",
      "Europäisches Ziesel",
      "Großer Tümmler",
      "Braunbär",
    ],
    threatened: [
      "Zwerwal",
      "Feldhamster",
      "Luchs",
      "Nymphenfledermaus",
      "Graues Langohr",
      "Hausratte",
      "Große  Hufeisennase",
    ],
    endangered: [
      "Sumpfmaus",
      "Mopsfledermaus",
      "Gartenschläfer",
      "Baltische Kegelrobbe",
      "Bechsteinfledermaus",
      "Wimperfledermaus",
      "Sumpfspitzmaus",
      "Schweinswal",
      "Kleine Hufeisennase",
      "Waldbirkenmaus",
    ],
    vulnerable: [
      "Wolf",
      "Gartenspitzmaus",
      "Nordfledermaus",
      "Breitflügelfledermaus",
      "Wildkatze",
      "Atlantische Kegelrobbe",
      "Feldhase",
      "Fischotter",
      "Iltis",
      "Braunes Langohr",
    ],
    rare: [
      "Elch",
      "Alpenwaldmaus",
      "Steinbock",
      "Schneemaus",
      "Baumschläfer",
      "Alpenfledermaus",
      "Weißschnauzendelfin",
      "Schneehase",
      "Helgoländer Hausmaus",
    ],
    pre: [
      "Eurpäischer Biber",
      "Feldspitzmaus",
      "Westigel",
      "Baummarder",
      "Zwergmaus",
      "Haselmaus",
      "Wasserspitzmaus",
      "Großer Abendsegler",
      "Wildkaninchen",
      "Gämse",
    ],
  });
});

app.listen(PORT, () => {
  console.log("App started.");
});
