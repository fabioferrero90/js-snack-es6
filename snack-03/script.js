/*
- Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
- La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

const exampleArray = [17, 21, 54, 64, 12, 22];
const a = 2;
const b = 5;

function filterArrayByRange(array, a, b) {
  // Controllo se 'a' è maggiore o uguale a zero e se 'b' è minore della lunghezza dell'array
  if (a >= 0 && b < array.length && a < b) {
    // Utilizzo il metodo slice per restituire un nuovo array con gli elementi in posizione tra 'a' e 'b'
    return array.slice(a + 1, b);
  }
  // Se gli argomenti non sono validi, ritorna un errore
  console.log("Controlla i valori inseriti");
}

console.log(filterArrayByRange(exampleArray, a, b));
