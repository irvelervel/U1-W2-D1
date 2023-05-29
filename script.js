// UN FILE JS ESTERNO!

// Il mestiere del developer si incentra sulla RISOLUZIONE di problemi. Nella creazione di un ALGORITMO!
// Un algoritmo è una serie di passaggi, numerati, che porta alla soluzione di un problema.
// Un algoritmo, se il problema è sempre lo stesso, vi porterà alla stessa soluzione.

// al fine di scrivere un algoritmo, sarà quasi sempre fondamentale creare delle VARIABILI.
// una variabile è un'allocazione di memoria dedicata alla memorizzazione di un valore.
// possiamo immaginarla come una scatola che contiene qualcosa, o una bacinella con un ingrdiente nella realizz. di una ricetta.

// VARIABILI
// le variabili di dichiarano con la parola chiave (keyword) --> let
let dog // creazione della variabile dog
// ho creato una variabile chiamata "dog". Al momento questa variabile è VUOTA (è stata dichiarata, ma non ha nessun valore)
dog = 'Fido' // assegnazione del valore "Fido" alla variabile che si chiama dog

let cat = 'Tom' // ho creato la variabile cat e le assegnato un valore di "Tom" in un'unica riga

// TIPI DI VALORI POSSIBILI PER UNA VARIABILE:
// stringhe es. 'Mario', "Rossi", `Stefano`
// numeri es. 1, 0, 150000, 25.2
// booleani es. true, false
// undefined
// null

// le variabili vengono nominate secondo la cosiddetta sintassi "camelCase"
let favouriteNumber = 7 // senza delimitatori come apici, virgolette etc.!

let canYouDrive = true // senza delimitatori come apici, virgolette etc.!

// le variabili sono contenitori DINAMICI, è possibile cambiarne il valore successivamente!
favouriteNumber = 10 // ho cambiato il valore di favouriteNumber
canYouDrive = false

// NON abituatevi a CAMBIARE il TIPO di una variabile
// favouriteNumber = 'Stefano' // PESSIMA ABITUDINE!!! in altri linguaggi questa cosa non si può fare...

// una variabile SI DICHIARA UNA VOLTA SOLA!
// ma una variabile può venire assegnata/riassegnata n volte!

// ESEMPI DI VARIABILI NUMERICHE
let number1 = 15
let number2 = 20
let number3 = number1 + number2

// number3 è 35??
console.log('controllo il number3', number3) // sì :)
console.log('number2', number2)

number1 = number1 + number2
console.log('number1', number1) // ? 35
number1 = number1 - number3 // ? 0
console.log('alla fine delle operazioni, number1', number1)

console.log(3 * 5) // moltiplicazione
console.log(20 / 4) // divisione
console.log(22 % 5) // modulo (resto della divisione) --> 2 (farebbe 4 con il resto di 2)
// module operator

let falseNumber1 = '15' // !WARNING! è una stringa!!
let falseNumber2 = '20'
console.log('SOMMA TRA FALSENUMBERS', falseNumber1 + falseNumber2) // ??? '1520'
// stesso risultato anche se falseNumber2 fosse un numero

let firstName = 'Stefano'
let lastName = 'Casasola'
let fullName = firstName + ' ' + lastName
console.log('fullName', fullName)
// alert(fullName) // <-- fa comparire un popup che dev'essere chiuso dall'utente!

// console.log(myName) // <-- errore! non posso accedere ad una variabile PRIMA della sua dichiarazione
let myName = 'Stefano'

const fixedNumber = 50
// fixedNumber = 100 // <-- ERRORE! è una costante, non potrà mai cambiare valore

// le costanti sono comode per memorizzare valori che non nascono per essere cambiati nel corso del tempo,
// ma più che altro per evitarmi di riscrivere magari stringhe complicate a mano...
const epicodeURL = 'https://www.epicode.com'

// i valori booleani sono comuni nella valutazione di espressioni o controlli di veridicità
console.log(fixedNumber > 60)
