let usuario = document.getElementById ("usuario")
let contraseña = document.getElementById ("contraseña")
let botonRegistrarse = document.getElementById ("botonRegistro")
let botonIniciarSesion = document.getElementById ("botonLogin")

connect2Server(3000); 

botonRegistrarse.addEventListener("click", function() {
    let contraseñafinal = contraseña.value
    let usuariofinal = usuario.value
    console.log("front");
    


postEvent("registro", {user: usuariofinal,contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});

botonIniciarSesion.addEventListener("click", function() {
    let contraseñafinal = contraseña.value
    let usuariofinal = usuario.value
    console.log("front");
    


postEvent("inicioSesion", {user: usuariofinal,contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});
