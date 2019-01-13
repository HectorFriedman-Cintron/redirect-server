const http = require("http");

module.exports = (redirect, port) => {
  return http.createServer((req, res) => {
    if (redirect) {
      var newUrl = redirect.host;

      res.statusCode = redirect.code || 301;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Location', newUrl);
      res.end(`Redirecting to ${newUrl}`);
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Host not found');
    }
  }).listen(port);
};