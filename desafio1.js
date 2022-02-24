alert('Tenemos las siguientes opciones para tu viaje. \n Selecciona y te daremos el precio del paquete');

// Se podrá seleccionar entre dos opciones diferentes: Santa Marta o Cartagena

let destino = parseInt(prompt('Selecciona tu destino: \n 1. Santa Marta \n 2. Cartagena'));

// Restringir las elecciones a los números 1 o 2
while (destino < 1 || destino > 2 || isNaN(destino)){
alert('Esta no es una opción, presiona F5 y selecciona 1 o 2');
break;
}

// Descripción del primera opciones
switch (destino) {
    
    case 1:
    const precioSantaMarta = 500000
    let personasSM = parseInt (prompt('¿Cuántas personas viajan'));
    const cotizacionSm = precioSantaMarta * personasSM;
    alert (cotizacionSm + ' COP');
    break;
        
    case 2:
    const precioCartagena = 400000
    let personasCT = parseInt (prompt('¿Cuántas personas viajan'));
    const cotizacionCt = precioCartagena * personasCT;
    alert (cotizacionCt + ' COP');
    break;
}