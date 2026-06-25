import http from 'http';
import { greet } from './greet';

const PORT = Number(process.env.PORT ?? 3000);

const SECURITY_HEADERS = {
  'Content-Type': 'text/plain',
  'X-Content-Type-Options': 'nosniff',
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  'Cross-Origin-Resource-Policy': 'same-origin',
};

const server = http.createServer((_req, res) => {
  res.writeHead(200, SECURITY_HEADERS);
  res.end(greet('World'));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`DAST test server listening on http://0.0.0.0:${PORT}`);
});
