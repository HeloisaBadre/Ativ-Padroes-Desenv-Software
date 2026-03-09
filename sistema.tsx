const imposto = new impostoEletronico();
const pagamento = new pagamentoCartao();
const email = new confirmacaoEmail();

const pedido = new pedidoService(pagamento, imposto, email);

pedido.realizarPedido(200, 3, "heloisa@gmail.com");