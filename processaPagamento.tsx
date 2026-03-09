interface processadorPagamento {
    processar(valor: number): void;
}

class pagamentoCartao implements processadorPagamento {
    processar(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} no cartão.`);
    }
}

class pagamentoBoleto implements processadorPagamento {
    processar(valor: number): void {
        console.log(`Gerando boleto de R$ ${valor}.`);
    }
}

class pagamentoPix implements processadorPagamento {
    processar(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} no Pix.`);
    }
}

class pagamentoCriptoMoeda implements processadorPagamento {
    processar(valor: number): void {
        console.log(`Processando pagamento de R$ ${valor} em criptomoedas.`);
    }
}

class confirmacaoEmail {
    enviar(email: string, valor: number): void {
        console.log(`Enviando email de confirmação de pagamento de R$ ${valor} para o email: ${email}.`);
    }
}