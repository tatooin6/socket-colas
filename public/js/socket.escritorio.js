// Comando para establecer la conexion con el servidor
var socket = io();

var searchParams = new URLSearchParams (window.location.search);

// has es para preguntar si se tiene el parametro de escritorio
if(!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('Es escritorio es necesario');
}

// obtener el parametro de escritorio que viene por la barra de url del navegador
var escritorio =  searchParams.get('escritorio');
var label = $('#idTicketNumero');

console.log(escritorio);

// colocando el numero de escritorio a la pantalla de escritorio
$('h1').text('Escritorio ' + escritorio);

// al presionar el boton mandar el escritorio que se tiene asignado en la maquina
$('button').on('click', function() {
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp) {
        // console.log(resp);

        if (resp === 'No hay tickets') {
            label.text(resp);
            // alert(resp);
            return;
        }

        label.text(resp.numero);
    });
});