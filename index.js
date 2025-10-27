import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

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
 return console.log("Ese usuario o mail ya está en uso");
}
}
if (i === listaDeUsuarios.length)
{
 listaDeUsuarios.push(usuario, contraseña);
 fs.writeFileSync("usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
 i = listaDeUsuarios.length + 1;
 return console.log("hecho");
}
}
if(ok)
{
    return "hecho";
}
else{
 return "Ese usuario o mail ya está en uso";
}
}

Login
function Login(usuario, mail)
{
   let ListaDeUsuarios = fs.readFileSync("usuarios.json", "utf-8");
    let parsearUsuarios = JSON.parse(leerListaDeUsuarios)
for (let i = 0; i < ListaDeUsuarios.length; i++) 
{
 if(usuario === ListaDeUsuarios[i])
{
console.log("ya existe");
}
if (i === ListaDeUsuarios.length)
{
console.log("hecho");
}
}

}

subscribePOSTEvent("registro", registrarse);


startServer(3000, true);