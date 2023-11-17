// Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.

// Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".

console.log("Il promemoria é in fase di impostazione");

function mostraPromemoria() {
    console.log("Promemoria: È ora di fare una pausa!");
}

setTimeout(() => {
    mostraPromemoria();
}, 5000);