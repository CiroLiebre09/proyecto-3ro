import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let respuesta;

function registrarse(usuario, contraseña)
{
 let ok;   
let listaDeUsuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));

for (let i = 0; i <= listaDeUsuarios.length; i++) 
{

if (listaDeUsuarios[i])
{
 if(usuario.user === listaDeUsuarios[i].user)
{
 i = listaDeUsuarios.length + 1;
 ok = false;
 return "Ese usuario o mail ya está en uso";
}
}
if (i === listaDeUsuarios.length)
{
 listaDeUsuarios.push(usuario, contraseña);
 fs.writeFileSync("usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
 i = listaDeUsuarios.length + 1;
 ok = true;
 return "hecho";
}
}
}



function login(usuario, contraseña)
{
 let ok;   
let listaDeUsuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));

for (let i = 0; i <= listaDeUsuarios.length; i++) 
{

if (listaDeUsuarios[i])
{
 if(usuario.user === listaDeUsuarios[i].user && usuario.contraseña === listaDeUsuarios[i].contraseña)
{
 i = listaDeUsuarios.length + 1;
 ok = true;
 return "ah iniciado sesión correctamente";
}
}
if (i === listaDeUsuarios.length)
{
 i = listaDeUsuarios.length + 1;
 ok = false;
 return "El usuario/contraseña es incorrecto";
}
}
}

subscribePOSTEvent("registro", registrarse);
subscribePOSTEvent("inicioSesion", login);

startServer(3000, true);