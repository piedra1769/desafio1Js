alert('Tenemos las siguientes opciones para tu viaje');

// Se podrá seleccionar entre dos opciones diferentes: Santa Marta o Cartagena

let destino = parseInt(prompt('Selecciona tu destino: \n 1. Santa Marta \n 2. Cartagena'));

// Restringir las elecciones a los números 1 o 2
while (destino < 1 || destino > 2 || isNaN(destino)){
alert('Debes seleccionar solo una opción entre 1 y 2');
opcion = parseint(prompt('Selecciona tu destino: \n 1. Santa Marta \n 2. Cartagena'));
}

// Descripción del primera opción
switch (destino) {
    
    case 1:
    const precioSantaMarta = 500000
    let personasSM = parseInt (prompt('¿Cuántas personas viajan'));
    const cotizacionSm = precioSantaMarta * personasSM;
    alert (cotizacionSm);
    break;
        
    case 2:
    const precioCartagena = 400000
    let personasCT = parseInt (prompt('¿Cuántas personas viajan'));
    const cotizacionCt = precioCartagena * personasCT;
    alert (cotizacionCt);
    break;
}