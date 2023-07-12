const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Contenty-type": "text/html" });

  fs.unlink("logs.txt", (err) => {
    if (err) {
      console.log("erro ao excluir o arquivo");
      return;
    }

    console.log("arquivo removido");
  });

  res.write("ok");
  res.end();
});

server.listen(port, () => {
  console.log("server is running on port -->", port);
});
