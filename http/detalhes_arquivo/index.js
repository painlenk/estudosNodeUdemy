const fs = require("fs");

fs.stat("logs.txt", (err, data) => {
  if (err) {
    console.log("erro ao buscar os detalhes do arquivo");
    return;
  }

  console.log(data.isDirectory());
  console.log(data.size);
  console.log(data.isSymbolicLink());
  console.log(data.isFile());
  console.log(data.ctime);
});
