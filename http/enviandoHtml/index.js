const http = require("http");
const url = require("url");

const address = "http://www.meusite.com.br/catalog?produtos=cadeira";

const parsedUrl = new url.URL(address);

const obj = {
  origem: address,
  host: parsedUrl.host,
  pathName: parsedUrl.pathname,
  search: parsedUrl.search,
  searchParam: parsedUrl.searchParams,
  searchParamGet: parsedUrl.searchParams.get("produtos"),
};

const port = 3002;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("contenty-type", "text/html");
  res.end(JSON.stringify(obj));
});

server.listen(port, () => {
  console.log("server is running on port ", port);
});
