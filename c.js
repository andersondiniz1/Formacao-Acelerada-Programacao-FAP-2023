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


const meuArray = [10, 20, 30, 40, 50];
var teste = meuArray[1];
console.log(teste);

const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
const tamanho = frutas.length;
console.log(tamanho);
console.log(frutas.length);
frutas.push("pera");
frutas.splice(0, 0);
console.log(meuArray);

const numeros = [10, 20, 30, 40, 50];
//const procurada = 25
if (numeros.includes(25)){
console.log("25 foi encontrado")
}
else {
    console.log("25 não foi encontrado")
};
