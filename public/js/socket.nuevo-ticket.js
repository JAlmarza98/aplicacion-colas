//Establecer conexion con el servidor
var socket = io();
var label = $('#lblNuevoTicket');


socket.on("connect", function () {
    console.log("conectado al servidor");
});

socket.on("disconnect", function () {
    console.log("Perdimos la conexion con el servidor");
});

socket.on('estadoActual', function(resp){
    label.text(resp.actual);
});

$('button').on('click', function(){

    socket.emit('nuevoTicket', null, function(nuevoTicket){
        label.text(nuevoTicket);
    });
});
