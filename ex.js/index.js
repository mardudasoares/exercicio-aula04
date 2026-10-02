import http from "http";
import { route } from './route.js';

const server = http.createServer(route);

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
    
})