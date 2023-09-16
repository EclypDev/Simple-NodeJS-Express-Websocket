import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

import { createServer } from 'http';
import { Server } from 'socket.io';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const server = createServer(app);
const socketio = new Server(server);

app.set('port', process.env.PORT || 3000);

// Ejecutamos la función de sockets.mjs
import setupSockets from './sockets.js';
setupSockets(socketio);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Lanzamos el servidor
server.listen(app.get('port'), () => {
    console.log("Servidor en el puerto ", app.get('port'));
});
