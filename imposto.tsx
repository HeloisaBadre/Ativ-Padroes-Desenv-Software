interface calculoImposto {
    calcular(preco: number, quantidade: number): number;
}

class impostoEletronico implements calculoImposto {
    calcular(preco: number, quantidade: number): number {
        const total = preco * quantidade * 0.15;
        return total;
    }
}

class impostoAlimento implements calculoImposto {
    calcular(preco: number, quantidade: number): number {
        const total = preco * quantidade * 0.05; 
        return total;
    }
}

class impostoVestuario implements calculoImposto {
    calcular(preco: number, quantidade: number): number {
        const total = preco * quantidade * 0.1;
        return total;
    }
}

class impostoLivro implements calculoImposto {
    calcular(preco: number, quantidade: number): number {
        return preco * quantidade; 
    }
}

