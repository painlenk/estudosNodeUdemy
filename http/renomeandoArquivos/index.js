const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Contenty-type": "text/html" });

  fs.rename("logs.txt", "logsNew.txt", (err) => {
    if (err) {
      console.log("falha ao renomear o arquivo");
      return;
    }
    console.log("arquivo renomeado com sucesso");
    res.write("arquivo renomeado com sucesso");
    res.end();
  });
});

server.listen(port, () => {
  console.log("server is running on port -->", port);
});
