const fs = require("fs");

if (!fs.existsSync("./detalhes")) {
  console.log("diretorio não existe");
  fs.mkdirSync("/detalhes");
}

if (fs.existsSync("./detalhes")) {
  console.log("o diretorio ja existe");
}
