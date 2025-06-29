import http from 'http';
import { URL } from 'url';

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/app' && req.method === 'GET') {
        console.log("Deepak Kumar");
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello from Deepak's server!");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page Not Found");
    }
});

server.listen(1000, () => {
    console.log("Server is running on port 1000");
});
