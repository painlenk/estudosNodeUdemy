const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.write("servidor rodando");
  res.end();
});

server.listen(3000, () => {
  console.log("server is running on port ", port);
});
