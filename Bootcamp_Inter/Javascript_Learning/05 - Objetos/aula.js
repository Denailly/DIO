/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar esse percurso. 
*/

class Carro {
    
    marca;
    cor;
    gastoMedioKm;


    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calculaConsumo(distancia, valorCombustivel) {
        const valorGastoViagem = (distancia * valorCombustivel) * this.gastoMedioKm;
        
        return valorGastoViagem
     }
}

 const Corolla = new Carro('Toyota', 'Preto', 1/9)
// console.log(Corolla);

const Mobi = new Carro('Volkswagen', 'Cinza', 1/12)
// console.log(Mobi);

console.log (Mobi.calculaConsumo(183, 4.60))

console.log(Corolla.calculaConsumo(18, 5.00))
