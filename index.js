'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  
  const now = Date.now();
  const expDate = new Date(now + 30 * 3600*24 * 1000);
  const expDateStr = expDate.toUTCString();

  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader('Set-Cookie', `last_access=${now};expires=${expDateStr};`);
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});