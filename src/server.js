const http = require("http");
const app = require("../src/app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
