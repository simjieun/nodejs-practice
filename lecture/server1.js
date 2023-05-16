const http = require("http");
const fs = require("fs").promises;

console.log(http);
const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./server1.html");
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080);

server.on("listening", () => {
  console.log("8080 port is listening...");
});

server.on("error", (error) => {
  console.error(error);
});
