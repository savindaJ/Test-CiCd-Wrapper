import http from 'http';
import { greet } from './greet';

const PORT = Number(process.env.PORT ?? 3000);

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greet('World'));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`DAST test server listening on http://0.0.0.0:${PORT}`);
});
