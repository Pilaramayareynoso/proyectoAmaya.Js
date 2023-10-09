let username = prompt("¿Cuál es tu nombre y Apellido?");
alert("¡Bienvenido, " + username + "! Bienvenido a nuestra tienda de decoración.");

let decoracion1 = "Manta Para Sillones";
let decoracion2 = "Cuadro Abstracto";
let decoracion3 = "Lámpara de Pie";

function mostrarDecoraciones() {
    alert(`Tus opciones de decoración son: ${decoracion1}, ${decoracion2}, ${decoracion3}`);
}

function agregarNuevaProducto(nuevaProducto) {
    if (!nuevaProducto) {
        alert("Por favor, ingresa el nombre de la nuevo Producto.");
    } else {
        decoracion3 = nuevaProducto;
        alert(`Has agregado "${nuevaProducto}" a tus opciones de decoración.`);
    }
}

function listaDeOpciones() {
    let opcion;
    do {
        opcion = parseInt(prompt("Menú:\n" + "1. Mostrar lista de decoraciones\n" + "2. Agregar nuevo Producto\n" + "3. Salir"));

        switch (opcion) {
            case 1:
                mostrarDecoraciones();
                break;
            case 2:
                let Nuevoproducto = prompt("Ingresa el nombre de la nueva decoración");
                agregarNuevaDecoracion(nuevaDecoracion);
                break;
            case 3:
                alert("Gracias por visitar nuestra tienda de decoración. ¡Esperamos verte pronto!");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción del menú.");
        }
    } while (opcion !== 3);
}

listaDeOpciones();