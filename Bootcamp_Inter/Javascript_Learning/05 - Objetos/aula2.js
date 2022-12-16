/*
    Crie uma classe para represetar pessoas.
    Para cada pessoa teremos os atributos nome, peso, altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer
    o valor do seu IMC;
*/

class Pessoa {
    peso;
    altura;

    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura
    }

    CalculaIMC(peso, altura){
        const IMC = this.peso / (this.altura * this.altura)
        return IMC;
    }
}

const jose = new Pessoa(70, 1.75)

console.log(jose.CalculaIMC());