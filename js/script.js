// chiedo in input i dati dell'utente

let name = prompt("Qual'è il tuo nome?");

let surname = prompt("Qual'è il tuo cognome?");

let color = prompt("Qual'è il tuo colore preferito?");

// creo la password

const password = name+surname+color+"21";

// la printo in pagina

document.getElementById("outputBox").innerHTML="Complimenti! La tua nuova password è: " + password;