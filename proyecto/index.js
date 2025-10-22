// Registro

function registrarse(usuario, mail, contraseña)
{
let ListaDeUsuarios = fs.readFileSync("usuarios.json", "utf-8");
ListaDeUsuariosUsuarios = JSON.parse(ListaDeUsuarios)
for (let i = 0; i < ListaDeUsuarios.length; i++) 
{

if(usuario || mail === ListaDeUsuarios[i])
{
console.log("No es posible registrarse con ese usuario, ya existe");
i = ListaDeUsuarios.length + 1;
}
if (i === ListaDeUsuarios.length)
{
console.log("hecho");
parsearUsuarios.push(usuario, mail, contraseña)
fs.writeFileSync("data/favoritos.json", JSON.stringify(parsearUsuarios, null, 2));
}
}
}

// Login
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
