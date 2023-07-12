const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const q = url.parse(req.url, true);
  const fileName = q.pathname.substring(1);

  if (fileName.includes("html")) {
    console.log("fileName", fileName);

    if (!fs.existsSync(fileName)) {
      fs.readFile("404.html", (err, data) => {
        if (err) {
          console.log("deu pau");
          return res.end();
        }

        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      return;
    }

    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.log("erro ao ler o arquivo");
        return res.end();
      }

      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log("server is running on port", port);
});
