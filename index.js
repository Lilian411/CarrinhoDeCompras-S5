console.table('--------------------------------------')
console.table('      Carrinho de Compras      ')
console.table('           Lilian Guedes              ')
console.table('--------------------------------------')

const db = require ('./database.js')

const { produtos } = db
// - Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`
produtos.sort((a ,b ) => a.preco - b.preco)


console.table(produtos)

const read = require('readline-sync')
const carrinho = []
//- Receber via terminal as entradas de `id` e `quantidade` dos produtos a serem adquiridos.
const verProdutos = read.question (' voce deseja encontrar produtos por categoria ? (S/N) ')
if(verProdutos.toLocaleUpperCase()==='S'){
  console.table('------------------------------------------------------------')
  console.table('essas são as categorias')
  console.table('alimento,bebida, casa higiene, informatica')
  console.table('------------------------------------------------------------')

  const puxarCategoria = read.question('voce esta procurando produtos de que categoria ?')
  const categorias = produtos.filter(item => item.categoria === puxarCategoria)
  console.table(categorias)
} 
  else {
    (verProdutos.toLocaleUpperCase()!== 'S')
    console.table('Essas sao os disponiveis')
    console.table(produtos)
  }
const array = new Array()

class Pedido {
    constructor(array) {
    this.produto = array
    this.subTotal = 0
    this.valorTotal = 0
    this.totalItens = 0

  }
}
const compras = () => {
  produtId = parseInt (read.question('digite o id do produto:'))
  
  for (i=0 ; i < 1000 ; i++ ){
    findId = produtos.find(item => item.id==produtId)
    if (findId){
        break;
    }else {
      produtId = parseInt(read.question(' id nao encontrado'))
    }
  }


quantItem = parseInt( read.question('digite uma quantidade'))
for (i=0 ; i < 1000 ; i++ ){
  if ( quantItem > 0 ){
    break;
  }else {
    quantItem = parseInt (read.question('digite uma quantidade valida'))
  }
}
  const produtosCarrinho = {...findId, quantidadeItem}
  carrinho.push(produtosCarrinho) 
  
  const continueComprando = read.question(' deseja continuar comprando ?'(S/N))
  const Formato =  continueComprando.toLowerCase()
  if (formato === 'n'){
    cupom = parseInt(read.question('digite o valor do cupom'))
  
  }else{
    compras()
  }
  for( i=0 ; i <1000 ; i++)
     if (cupom > 15 || cupom < 0){
       cupom = parseInt( read.question('cupom invalido'))
     }else{
       break;
     }
}
compras ()
class Order {
  constructor (carrinho){
    this.newProducts = carrinho
    this.subTotal = 0
  }
  calcSubtotal(){
    this.subTotal = this.newProducts.reduce((acumulador,item)=> acumulador + (item.preco*item.quantidade),0)
  }
}
const order = new Order(carrinho)
console.table(order.newProducts);
order.calcSubtotal()
console.table(`valor do pedido R$ ${order.subTotal.toFixed(2)}`);
const desconto = order.subTotal* ( cupom/100)
console.table(`valor do pedido R$ ${desconto.toFixed(2)}`);
const total = order.subTotal - desconto
console.table(`valor do pedido R$ ${total.toFixed(2)}`);

console.table (' obrigado, volte sempre!')