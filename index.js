import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function registrarse(usuario, contraseña)
{
let listaDeUsuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf8"));
for (let i = 0; i < listaDeUsuarios.length; i++) 
{

if(usuario === listaDeUsuarios[i])
{
console.log("Ese usuario o mail ya está en uso");
i = listaDeUsuarios.length + 1;
}
if (i === listaDeUsuarios.length)
{
console.log("hecho");
listaDeUsuarios.push(usuario, contraseña);
return fs.writeFileSync("usuarios.json", JSON.stringify(listaDeUsuarios, null, 2));
}
}
}

/* Login
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

}*/

subscribePOSTEvent("registro", registrarse);


startServer(3000, true);