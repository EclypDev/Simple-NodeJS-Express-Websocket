export default function setupSockets(io) {
    io.on('connection', (socket) => {
        console.log('Nuevo usuario conectado');

        socket.on('enviar mensaje', (mensaje) => {
            console.log('Mensaje recibido desde el cliente:', mensaje);

            // Emitir el mensaje a todos los clientes conectados
            io.sockets.emit('nuevo mensaje', { nick: 'Servidor', msg: mensaje });
        });
    });
}
