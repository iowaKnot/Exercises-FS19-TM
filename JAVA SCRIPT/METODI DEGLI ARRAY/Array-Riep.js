//In questo esercizio dato un array di studenti:

//Utilizza forEach per stampare i nomi degli studenti.
//Utilizza find per trovare uno studente con un voto superiore a 90.
//Utilizza reduce per calcolare la media dei voti degli studenti.
//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
//Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

studenti.forEach(name => console.log(name.nome)); // forEach

const find90 = studenti.find(vote => vote.voto > 90);
console.log(find90); // find

const sum = studenti.reduce((a, vote) => a + vote.voto, 0);
const avg = sum / studenti.length;
console.log(avg); // reduce

const nameCaps = studenti.map(name => name.nome.toUpperCase());
console.log(nameCaps); // map

const filter85 = studenti.filter(vote => vote.voto > 85);
console.log(filter85); // filter