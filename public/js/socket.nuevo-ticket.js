// ARCHIVO DE LOGICA DE TICKET DE LA LADO DEL CLIENTE

// Comando para establecer la conexion con el servidor
var socket = io();

var label = $('#lblNuevoTicket');

// en conexion
socket.on('connect', function() {
    console.log('Se ha conectado con el servidor');
});

socket.on('disconnect', function(){
    console.log('Se ha desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    console.log('Respuesta Servidor: ', resp);
    label.text(resp.actual);
});


// Listener
$('button').on('click', function(){
    // console.log('Click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log(`Respuesta Server: ${siguienteTicket}`);
        label.text(siguienteTicket);
    });
})