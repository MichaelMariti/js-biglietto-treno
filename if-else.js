console.log('biglietto treno')

/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Buon lavoro! */

// salviamo in una variabile il prezzo per km del biglietto
const COSTO_PER_KM = 0.21

// 1. salvare in una variabile il numero di km che un utente ha inserito
const numKm = parseFloat(prompt('Inserisci il numero di km da percorrere'))
console.log (numKm)

// 2. salvare in una variabile l'età del passeggero
const età = parseInt(prompt('Inserisci la tua età'))
console.log (età)

// 3. calcolare il prezzo del biglietto
//  - calcolare il prezzo base (numero dei km * prezzo al km)
const prezzoBase = numKm * COSTO_PER_KM
console.log (prezzoBase)
let sconto = 0

//  - calcolare uno sconto:
//      - 20% minorenni
//      - 40% over 65
//      - 0% per tutti gli altri


//  - calcolare uno sconto PSEUDO CODICE:

//  - SE età < 18
//      - sconto = 20 * prezzo base / 100
if(età < 18) {
    const sconto = 20 * prezzoBase / 100
    // console.log(sconto)

    //  - ALTRIMENTI SE età >= 65
    //      - sconto = 40 * prezzo base / 100
} else if (età > 65) {
    const sconto = 40 * prezzoBase / 100
    // console.log(sconto)

    //  - ALTRIMENTI
    //      - sconto = 0 
} else {
    const sconto = 0
    // console.log(sconto)
}

//  - calcolare il prezzo finale (prezzo base - sconto)
const prezzoFinale = prezzoBase - sconto
console.log(sconto)
console.log(prezzoFinale)

// 4. stampare il prezzo del biglietto con massimo 2 cifre decimali
const message = `Il prezzo finale del biglietto è di € ${prezzoFinale}`
console.log (message)