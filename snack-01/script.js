/*
- Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
- Stampare a schermo la bici con peso minore.
*/

let bikes = [
  {
    name: 'Ultralight',
    weight: '2'
  },
  {
    name: 'Superlight',
    weight: '3'
  },
  {
    name: 'Standard',
    weight: '5'
  },
  {
    name: 'TrialBike',
    weight: '6'
  },
  {
    name: 'FatBike',
    weight: '8'
  }
]

let lighterbike = bikes[0]
for (const bike of bikes) {
  if (bike.weight < lighterbike.weight) {
    lighterbike = bike
  }
}

console.log(`La bici più leggera è il modello ${lighterbike.name}`)