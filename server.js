const http = require("http");

const port = Number(process.env.PORT || 8080);
const commit = process.env.STYX_COMMIT_SHA || "local-dev";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", commit }));
    return;
  }
  if (req.url === "/" || req.url === "/api/version") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: "demo-api", commit, message: "Hello from Styx demo-api" }));
    return;
  }
  res.writeHead(404);
  res.end("not found");
});

server.listen(port, () => {
  console.log(`demo-api listening on :${port} commit=${commit}`);
});
