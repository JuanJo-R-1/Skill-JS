//Variables
//var (no usar)
//Scope -> a nivel de funcion
var name="JuanJo";
var age = 17;

console.log(name);

function james() {
    var age = 15;
    console.log(age);
}
//permite re declarar la variable
var age = 19;
james()
console.log(age);

//age: No existe
//Hoisting

//let
//console.log(sexo); ///Error
let sexo = "Masculino";
//scope : bloque {....AQUI....}
function mostrarGenero() {
    console.log(sexo);
}
//No permite redefinir
//let sexo = "Otro":
console.log(sexo);
mostrarGenero();

//const 
const ROL_USUARIO = "User";
const OTRA = "Otro valor";
// ROL_USUARIO = "Otro"; ///Error

//Nomenclatura y Convenciones
let camelcase = 1;
let nombredeUsuario ="Juan";
let rolUsuarioPlataforma = "Camper";

let snake_case = 1;
let nombre_usuario = "Juan";
let rol_usuario_plataforma = "Camper";

const SCREAMING_CASE = 1;
const NOMBRE_USUARIO = "Juan";
const ROL_USUARIO_PLATAFORMA = "Camper";

let numero = 1;
console.log(typeof numero)

let caidas = [
    {
        fecha: '2025-08-10',
        damages: 'mental'
    },
    {
        vehiculo: 'Motocicleta'
    },
    true,
    'otros valores',
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

console.log(typeof caidas);

//conversiones

//toString
//definir
let esMayor = true;
let edaddelMayor = 18;
console.log(typeof esMayor);
console.log(typeof edaddelMayor);
//asignar
esMayor = String(esMayor);
console.log(typeof esMayor);
edaddelMayor = String(edaddelMayor);
console.log(typeof edaddelMayor);

let baloto = "234567890";
console.log(typeof baloto);
baloto = Number(baloto);
console.log(typeof baloto);

//interpretacion de variables
let mensaje = 'hola mi nombre es ' +nombredeUsuario+ ' y yo gane con el baloto N ' + baloto + ' y mi edad es '+ edaddelMayor;
let mensajeChido = `hola, mi nombre es ${nombredeUsuario} y yo gane con el baloto N ${baloto}.

Mi edad es ${edaddelMayor}`;
console.log(mensaje);
console.log(mensajeChido);