const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const name = require("url").parse(req.url, true).query.name;
  console.log("nameee -->", name);

  if (!name) {
    res.writeHead(200, { "Contenty-Type": "text/html" });
    fs.readFile("http/escrevendoEmArquivos/form.html", (err, data) => {
      if (err) {
        res.end("erro ao enviar os dados");
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    fs.writeFile(
      `./http/escrevendoEmArquivos/${name}_acesso.txt`,
      name,
      (err, data) => {
        if (err) {
          console.log("erro ao escrever o arquivo");
        }

        res.writeHead(302, {
          Location: "/",
        });

        return res.end();
      }
    );
  }
});

server.listen(port, () => {
  console.log("server is running on port ", 3000);
});
