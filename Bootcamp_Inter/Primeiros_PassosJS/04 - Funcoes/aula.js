/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*
Formas de pagmento 
    1 = Debito;
    2 = PIX;
    3 =  2x;
    4 = 3x+
*/



//Passando para uma function

const precoEtiqueta = 100;
const formaPagamento = 1;
//function
    function calculaJuros(valor, juros){
        return valor + (valor * (juros / 100))
    }
    function calculaDesconto(valor, desconto){
        return valor - (valor * (desconto / 100))
    };

if (formaPagamento === 1) {
  console.log("Débito 10% de desconto");
  let valorFinal = calculaDesconto(precoEtiqueta, 10);
  console.log(valorFinal);
} else if (formaPagamento === 2) {
  console.log("Dinheiro/PIX 15% de desconto");
  let valorFinal = calculaDesconto(precoEtiqueta, 15);
  console.log(valorFinal);
} else if(formaPagamento === 3) {
    console.log("Parcelado em até 2x");
    let valorFinal = precoEtiqueta;
    console.log(valorFinal)
} else if (formaPagamento === 4) {
    console.log("Parcelado acima de 2x, juros de 10%");
    let valorFinal = calculaJuros(precoEtiqueta, 10)
    console.log(valorFinal);
} else(
    console.log("Forma de pagament inválida")
)