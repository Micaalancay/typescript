
// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre: string = "Micaela";
console.log(nombre);
let edad: number = 25;
console.log(edad);
let esEstudiante: boolean = true;
console.log(esEstudiante);


// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.

function sumar (n1:number, n2:number):number{
    return n1+n2;
}
console.log("la suma es :", sumar(2,5));
const multiplicar = (n1:number, n2:number):number => n1*n2;
console.log("el producto es : ", multiplicar(3,8));
  
  // Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

const numeros = [1,2,3,4,5];
console.log(numeros);
const doble: number[]=[];
 numeros.forEach(num => doble.push(num*2));
console.log(doble);



// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

// Ejercicio 5
// Una variable que puede ser string o number
let dato: string | number;

// Asignamos un string
dato = "Hola TypeScript";
console.log("Valor como string:", dato);

// Cambiamos a number
dato = 2025;
console.log("Valor como number:", dato);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

interface Producto{
    nombre:string,
    precio:number,
    enStock:boolean
}

const arrayProducto: Producto[] = [
    {nombre:'Chocolate', precio:4500, enStock:true},
    {nombre:'Gaseosa Pepsi', precio: 3600, enStock: false},
    {nombre:'Mermelada', precio:1800, enStock: false},
    {nombre:'galleta pepito', precio:2500, enStock: true},
    {nombre:'papas lays', precio: 4500, enStock:true},
    {nombre:'Jugo ', precio:500, enStock:false}
]
//sin usar filter
function productoSinStock(array:Producto[]):Producto[]{
    const sinStock: Producto[]=[];
    array.forEach(pro=>{
        if(!pro.enStock){
            sinStock.push(pro);
        }
    });
    return sinStock;
}
//usando filter
const sinStock = arrayProducto.filter(prod=> {return !prod.enStock})

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

interface Cliente {
    nombre: string,
    dni:number,
    telefono: string,
    esCliente: boolean
}

const arrayClientes = [
    {nombre:'Pedro',dni:12345, telefono:'3549791', esCliente:true},
     {nombre:'Maria',dni:216546, telefono:'561057', esCliente:false},
      {nombre:'Jose',dni:65605, telefono:'21510', esCliente:false},
       {nombre:'Luca',dni:98297, telefono:'094980', esCliente:true},
        {nombre:'Mercedes',dni:10546, telefono:'78710984', esCliente:true},
         {nombre:'Mica',dni:549879, telefono:'74891', esCliente:false}
];

const esCliente = arrayClientes.filter(cliente => cliente.esCliente);
console.log(esCliente);


//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

const catalogo =[
    {nombre:'Chocolate', precio:4500, enStock:true},
    {nombre:'Gaseosa Pepsi', precio: 36, enStock: false},
    {nombre:'Mermelada', precio:1800, enStock: false},
    {nombre:'galleta pepito', precio:25, enStock: true},
    {nombre:'papas lays', precio: 4500, enStock:true},
    {nombre:'Jugo ', precio:10, enStock:false}

];

catalogo.forEach(producto=>{
    console.log(`nombre del producto:  ${ producto.nombre}, precio ${producto.precio}, hay stock? ${producto.enStock} `);
   
})

/*Ejercicio 9: Catálogo de Productos - filter
Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
Imprimor productosBaratos en la consola.*/

const productosBaratos = catalogo.filter(producto => producto.precio<50 );
console.log(productosBaratos);

/*Ejercicio 10: Actualización de Inventario - map
Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
Imprimir catalogoConDescuento en la consola.*/

const catalogoConDescuento = catalogo.map(producto =>({
    ...producto,
    precio: producto.precio - (producto.precio * 0.1)
}))

console.log("Catálogo original:", catalogo);
console.log("Catálogo con descuento:", catalogoConDescuento);
 /*Ejercicio 11: Búsqueda de Usuario - find
Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
Imprimir en la consola el objeto del usuario encontrado.*/

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "Micaela", activo: true },
  { id: 4, nombre: "Juan", activo: false }
];

const usuarioTres = usuarios.find(usuario=> usuario.id===3);
console.log('usuario con id 3:', usuarioTres);

/*Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 
****/

const usuariosActivos = usuarios.filter(usuario=> usuario.activo);
console.log('Usuarios activos: ', usuariosActivos);

const cantUsuariosActivos = usuariosActivos.length;
console.log('cantidad de usuaios activos: ', cantUsuariosActivos);

/*Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.*/

usuarios.forEach(usuario=>usuario.activo=false);
console.log(usuarios);
/*
Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
Imprimir el array productosFormato en la consola.
*/

const productosFormato=catalogo.map(producto=> `Producto: ${producto.nombre}, Precio: $${producto.precio}`);
console.log(productosFormato);
/*

Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:
*/

interface User{
    name:string,
    age: number,
    occupation: string
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson1(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}/*
function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}*/

console.log('Users:');
users.forEach(logPerson1);

/*
Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 
*/
interface Admin{
    name: string,
    age: number,
    role: string
}
type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);


