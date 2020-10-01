const fs = require('fs');

class Ticket {
    constructor (numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}

class TicketControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        // todos los tickets pendientes de revisión
        this.tickets = [];
        // los ultimos 4
        this.ultimos4 = [];

        // importacion de data de un archivo json
        let data = require('../data/data.json');

        // cada que se inicia un nuvo día entonces se reinicia todo
        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;
        } else {
            this.reiniciarConteo();
        }
    }

    siguiente() {
        this.ultimo += 1;
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);
        this.grabarArchivo();

        return `Ticket ${this.ultimo}`;
    }

    getUltimoTicket() {
        return `Ticket: ${this.ultimo}`;
    }

    getUltimos4() {
        return this.ultimos4;
    }

    atenderTicket ( escritorio ) {
        if (this.tickets.length === 0) {
            return 'No hay tickets';
        }

        let numeroTicket = this.tickets[0].numero;
        // elimina el primer elemento de la cola
        this.tickets.shift();

        // se genera un ticket nuevo para atenderse en el escritorio dado
        let atenderTicket = new Ticket(numeroTicket, escritorio);

        // para colocar el elemento al principio del arreglo
        this.ultimos4.unshift(atenderTicket);

        // para eliminar al ultimo
        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1); // elimina al ultimo del arreglo
        }

        console.log('Ultimos 4:');
        console.log(this.ultimos4);

        this.grabarArchivo();

        return atenderTicket;
    }

    reiniciarConteo () {
        
        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];
        console.log('Se a inicializado el sistema');
        this.grabarArchivo();

    }

    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);

    }

}



// para exportalo
module.exports = {
    TicketControl
}