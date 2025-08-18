$(document).ready(function() {
    $('#cedula').mask('0-0000-0000', {
        placeholder: '_-____-____'
    });
    
    $('#telefono').mask('0000-0000', {
        placeholder: '____-____'
    });
});
