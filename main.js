/*

O cardápio de uma lanchonete é o seguinte:
Especificação   Código  Preço
Cachorro quente 100     R$ 1,20
Bauru simples   101     R$ 1,30
Bauru com ovo   102     R$ 1,50
Hambúrguer      103     R$ 1,20
Cheeseburguer   104     R$ 1,30
Refrigerante    105     R$ 1,00

Faça um programa que leia o código dos itens pedidos e a quantidade desejada.
Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido.
O pedido é encerrado quando o cliente digitar o código 999
Controlar para que o cliente só possa digitar os códigos do menu

*/

const { obterTexto, obterNumero, obterInteiroPositivo } = require("./utils");

const cardapio = ['Cachorro quente', 'Bauru simples', 'Bauru com ovo', 'Hambúrguer', 'Cheeseburguer', 'Refrigerante'];
const codigo = [100, 101, 102, 103, 104, 105];
const valor = [1.20, 1.30, 1.50, 1.20, 1.30, 1.00];

var totalPedido = 0;
var pedido = [];

while (true) {

    var cod = obterInteiroPositivo('Digite o código do produto (ou 999 para sair): ');

    if (cod === 999) {
        break;
    }
    else if (cod < 100 || cod > 105) {
        console.log("Código inválido");
        continue;
    }

    var indiceItem = 0;
    var valorItem = 0;

  for (var i = 0; i < codigo.length; i++) {
    if (codigo[i] === cod) {
      indiceItem = i;
      valorItem = valor[i];
      break;
    }
  }

    var qtd = obterInteiroPositivo('Digite a quantidade desejada: ');
    
    var valorItem = valor[indiceItem];
    var precoItem = valorItem * qtd;
    
    console.log('Item:', cardapio[indiceItem]);
    console.log('Preço unitário: R$', valor[indiceItem].toFixed(2));
    console.log('Quantidade:', qtd);
    console.log('Total do item: R$', precoItem.toFixed(2));
    
    totalPedido += precoItem;

    pedido[pedido.length] = [cod, qtd, precoItem];
      
  }
  
  console.log('Total geral do pedido: R$', totalPedido.toFixed(2));

  for (var i = 0; i < pedido.length; i++) {
    console.log('  Código do Produto', pedido[i][0] + ':', pedido[i][1], 'unidades,', 'Total: R$', pedido[i][2].toFixed(2));
  }
