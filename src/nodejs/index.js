const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ app: 'finance-payment', status: 'running' }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('finance-payment - Node.js Application running on port ' + PORT);
});

module.exports = { server };
