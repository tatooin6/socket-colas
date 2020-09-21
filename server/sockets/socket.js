const { io } = require('../server');
// ticket-control Contiene la Lógica de los Tickets DEL LADO DEL SERVIDOR
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    // escuchar evento [ON]
    client.on('siguienteTicket', (data, callback) => {
        // debe mostrarse cual es el siguiente ticket
        let siguiente = ticketControl.siguiente(); 
        console.log(`Siguiente ticket: ${siguiente} `);
        callback(siguiente);
    });
    
    // emitir evento [EMIT] llamado estadoActual, este llama y retorna el ultimo ticket
    // segundo argumento es el objeto que se quiere mandar
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket() 
    });

    // escuchar
    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);

        callback(atenderTicket);

        // se necesita notificar/actualizar cambios en los ultimos4


    });

});