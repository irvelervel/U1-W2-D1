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
console.log(fixedNumber > 60) // false

let myVariable
console.log('myVariable', myVariable) // undefined, non è mai stato definito il valore di myVariable

let anotherVariable = null
console.log('anotherVariable', anotherVariable) // null, l'assenza di valore!

console.log(100 + myVariable) // NaN, not a number
// console.log(Array(16).join('wat' - 1) + ' Batman!') // sigla di Batman :)

let myDog = 'Pluto'
let myNumber = 50

myNumber += 10 // myNumber = myNumber + 10, si addiziona 10 a se stesso
console.log('myNumber', myNumber) // ? myNumber += 10 è uguale a dire myNumber = myNumber + 10

// VERIFICHIAMO LE CONDIZIONI
let num1 = 5
let num2 = 10
let num3 = 10

console.log(num1 < num2) // true
console.log(num2 <= num3) // true

console.log(num2 === num3) // true, === è un operatore di UGUAGLIANZA

// il == controlla che due valori siano solamente uguali per VALORE
// il === controlla che due valori siano uguali per VALORE E PER TIPO

console.log(10 == '10') // true :(
console.log(10 === '10') // false :)

let name1 = 'Stefano' // = è assegnazione
let name2 = 'Stefano' // = è assegnazione

// variabile <-- valore
let nameResult = name1 === name2
console.log('nameResult', nameResult)

// operatore AND &&
// operatore OR ||
// operatore NOT !

console.log(55 > 45 && 150 > 55) // tutta questa riga, sarà TRUE se tutti le sue condizioni sono TRUE
// l'unica situazione in cui varie condizioni legate via AND && sia true è che TUTTE le sue condizioni siano TRUE

console.log(55 > 45 && 150 < 55) // false

// true && true --> true
// true && false --> false
// false && true --> false
// false && false --> false

console.log(55 > 45 || 150 > 55) // questa riga sarà TRUE se anche solamente UNA delle sue condizioni è TRUE

console.log(55 > 45 || 150 < 55) // true
// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false

let shouldBeTrue = 55 > 45 // true
console.log('shouldBeTrue', shouldBeTrue)
console.log(!shouldBeTrue) // false, inverto il valore con l'operatore NOT (!)

// typeof
console.log(typeof shouldBeTrue) // boolean

let a = 50
console.log(a === a) // true, verifico che a sia uguale ad a
console.log(a !== a) // false, verifico che a sia diverso da a

console.log(10 != '10') // false
console.log(10 !== '10') // true

// TERNARY OPERATOR (extra)
const myAge = 17
let canIDrive = myAge > 18 ? true : false // ternary operator, in questo la condizione fallisce e quindi canIDrive diventa false
