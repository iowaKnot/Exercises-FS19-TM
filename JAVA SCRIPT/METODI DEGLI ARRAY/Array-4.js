
// Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: <name>-<age>.

function nicknameMap(persons) {
    const nicknameMapArr = persons.map(user => user.name + '-' + user.age); //
    console.log(nicknameMapArr); // Qui ho aggiunto il codice io.
  }
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const nicknames = nicknameMap(persons);
  console.log(persons);
  console.log(nicknames);