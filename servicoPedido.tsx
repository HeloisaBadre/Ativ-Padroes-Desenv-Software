class pedidoService {
    private pagamento: processadorPagamento;
    private calculo: calculoImposto;
    private email: confirmacaoEmail;

    constructor(pagamento: processadorPagamento, calculo: calculoImposto, email: confirmacaoEmail) {
        this.pagamento = pagamento;
        this.calculo = calculo;
        this.email = email;
    }

    realizarPedido(preco: number, quantidade: number, email: string): void {
        const total = this.calculo.calcular(preco, quantidade);
        this.pagamento.processar(total);
        this.email.enviar(email, total);
    }
}
