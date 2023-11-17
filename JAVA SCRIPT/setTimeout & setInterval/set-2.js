// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.

// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.

// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.

// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.

function contoAllaRovescia(number) {
    console.log(`Conto alla rovescia in corso... 
${number}`);
    const id = setInterval(() => {
        number--;
        console.log(`${number}`);
    }, 1000);
    
    setTimeout(() => {
        clearInterval(id);
        console.log(`Conto alla rovescia terminato.`);    
    }, 10100);
};

contoAllaRovescia(10);

// ESERCIZIO SVOLTO IN COLLABORAZIONE CON FRANCESCO.