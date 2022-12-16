// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero PAR encontrado

 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= array.length; i++) {
    if(array[i] % 2 === 0){
        console.log(array[i])
    }
   }