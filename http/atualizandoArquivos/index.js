const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const nameParam = require("url").parse(req.url, true).query.name;
  res.writeHead(200, { "Contenty-type": "text/html" });

  if (!nameParam) {
    fs.readFile("http/atualizandoArquivos/form.html", (err, data) => {
      if (err) {
        console.log("nao foi possivel fazer a leitura do arquivo");
        return;
      }

      res.write(data);
      res.end();
    });
  } else {
    const update = nameParam + "\r\n";
    const areadyExistLogArchive = fs.existsSync(
      "http/atualizandoArquivos/logs.txt"
    );

    if (!areadyExistLogArchive) {
      fs.writeFile("http/atualizandoArquivos/logs.txt", update, () => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    }

    fs.appendFile("http/atualizandoArquivos/logs.txt", update, () => {
      res.writeHead(302, { Location: "/" });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log("server is running on port: ", port);
});
