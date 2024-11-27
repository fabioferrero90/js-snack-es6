/*
- Creare un array di oggetti di squadre di calcio.
- Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
- Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
- Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//Creo un array di oggetti di squadre di calcio
const teams = [
  {
    name: 'Inter',
    points: 0,
    foulsSuffered: 0,
  },
  {
    name: 'Milan',
    points: 0,
    foulsSuffered: 0,
  },
  {
    name: 'Real Madrid',
    points: 0,
    foulsSuffered: 0,
  },
  {
    name: 'Barcellona',
    points: 0,
    foulsSuffered: 0,
  }
]

//Inizializzo il nuovo array
const newTeams = []

//Itero ogni elemento dell'array "teams"
for (const team of teams) {
  //Genero i valori random di points e foulsSuffered
  team.points = randomizeNumber(200, 300);
  team.foulsSuffered = randomizeNumber(1, 20);
  //Aggiungo i dati necessari al nuovo array
  newTeams.push({ name: team.name, foulsSuffered: team.foulsSuffered })
}

//Stampo il risultato dei due array
console.log(teams)
console.log(newTeams)

function randomizeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}