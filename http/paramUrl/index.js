const http = require("http");

const port = 3003;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  const name = require("url").parse(req.url, true).query.name;

  if (!name) {
    res.end(
      `<h3>Preencha o nome</h3> 
      <form method="GET">
        <input type="text" name="name" placeholder="nome">
        </input><input type="submit" value="enviar"></input>
      </form>`
    );
  } else {
    res.end(`<h1>Bem vindo ${name}</h1>`);
  }
});

server.listen(port, () => {
  console.log("server is running on port", port);
});
