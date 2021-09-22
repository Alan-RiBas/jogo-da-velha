//let numbers = [10,4,32,34,543,3456,654,567,87,6789,98];
//numbers.shift();
//console.log(numbers)
//function compararNumeros(a, b) {
//    return a - b;
//}
//
//function compararNumDecre(a, b) {
//    return b - a;
//}
//
//
//let numPar = numbers.filter(value => value % 2 == 0);
//numPar.sort(compararNumeros);
//
//for(let i = 0; i < numPar.length; i++) {
//   console.log(numPar[i]);
//}
//
//
//
//let numImp = numbers.filter(value => value % 2 == 1);
//numImp.sort(compararNumDecre);
//
//for(let i = 0; i < numImp.length; i++) {
//   console.log(numImp[i]);
//}
let nomes = [
    {
        name: 'Alan',
        age: 25
    }
]

document.write(nomes.[name])

let input = [{name: 'Joao', option: 'NAO'},{name: 'Carlos', option: 'SIM'},{name: 'Abner', option: 'NAO'},{name: 'Samuel', option: 'SIM'},{name: 'Ricardo', option: 'NAO'},{name: 'Abhay', option: 'SIM'},{name: 'Samuel', option: 'SIM'},{name: 'Andres', option: 'SIM'},{name: 'Roberto', option: 'NAO'},{name: 'Carlos', option: 'SIM'},{name: 'Samuel', option: 'SIM'},{name: 'Samuel', option: 'SIM'},{name: 'Abhay', option: 'SIM'},{name: 'Aline', option: 'SIM'},{name: 'Andres', option: 'SIM'},"FIM"];

 let list = [];

function friend(list) {
  let winner = list
    .filter(value => value.option === "SIM")
    .sort((a, b) => b.name.length - a.name.length);

  list.sort((a, b) => {
    if (a.option < b.option) return 1;
    if (a.option > b.option) return -1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  });
  console.log(list.map(a => console.log(a.name)).join(" "));
  console.log("\n Amigo do Pablo:");
  console.log(winner[0].name);
}

do {
  let [name, option] = input.split(" ");

  if (name !== "Abhay") {
    if (!list.some(e => e.name === name) || list == "") {
      list.push({ name: name, option: option });
    }
  }
  input = String(gets());
} while (input != "FIM");

friend(list);

