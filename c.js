// let teste = ["teste1", "teste2", "teste3"]; // array
// teste[2]; // mostrar
// teste[1] = "testando"; //substituir
// teste.push("teste4"); // add mais
// delete teste[teste.length-1]; // deletar, tamanho do array menos 1, isso por conta do zero e pq o maximo de indice é 3.
// //console.log(teste[teste.length-1]);
// console.log(teste);
// teste[teste.length-1] = "testando2"; //atribuindo
// teste.splice(0,3) // indice de 0 á 3 sera excluido
// teste.splice(teste.length-1,1)


// const meuArray = [10, 20, 30, 40, 50];
// var teste = meuArray[1];
// console.log(teste);

// const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
// const tamanho = frutas.length;
// console.log(tamanho);
// console.log(frutas.length);
// frutas.push("pera");
// frutas.splice(0, 0);
// console.log(meuArray);

// const numeros = [10, 20, 30, 40, 50];
// //const procurada = 25
// if (numeros.includes(25)){
// console.log("25 foi encontrado")
// }
// else {
//     console.log("25 não foi encontrado")
// };


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4, 5];
// const concatenado = array1.concat(array2);
// console.log(concatenado);

// const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosPares = numeros1.filter(numero => numero % 2 === 0);
// console.log(numerosPares);

// const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log(numeros.sort())

// const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
// console.log(frutas[2]);


function verificarArray(parametro) {
    if (Array.isArray(parametro)) {
      return true;
    } else {
      return false;
    }
  }
  
  const minhaArray = [1, 2, 3];
  
  if (verificarArray(minhaArray)) {
    console.log("É uma array válida!");
  } else {
    console.log("Não é uma array válida!");
  }

  
  
  
  