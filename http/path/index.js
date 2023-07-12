const path = require("path");

const customPath = "/src/vendas/relatorios.txt";

console.log(path.basename(customPath));
console.log(path.dirname(customPath));
console.log(path.extname(customPath));

// path absoluto
console.log(path.resolve("logs.txt"));
// path relativo
console.log(path.relative("index.js", "logs.txt"));

//criando paths
const dirName = "relatorios";
const fileName = "vendas.txt";

const newPath = path.join("/", dirName, fileName);
console.log(newPath);
