const http = require("http");
const fs = require("fs");

const port = 3004;

const server = http.createServer((req, res) => {
  fs.readFile("http/retornandoHtmlComFs/index.html", (err, data) => {
    if (err) {
      res.end("Erro na leitura do arquivo");
      return;
    }

    res.writeHead(200, { "Contenty-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log("server is running on port", port);
});
