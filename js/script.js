var nUtente = Math.floor(Math.random() * 6 + 1);
var nComp = Math.floor(Math.random() * 6 + 1);

var risultato = "Pareggio";

if (nUtente > nComp) {
    risultato = "Il tuo numero è maggiore: hai vinto contro il computer.";
} else if (nUtente < nComp) {
    risultato = "Il tuo numero è inferiore: il computer ha vinto."
}

document.getElementById("text").innerHTML = risultato;
