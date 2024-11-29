"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldoDaConta = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldoDaConta += valor;
    }
}
// interface IExemplo2 {
//     cpf: number;
// }
// interface IExemplo3 extends IExemplo2{
//     telephone: number;
// }
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0.001;
    }
    // telephone: number;
    // cpf: number;
    transferir(valor, destinatario) {
        destinatario.saldoDaConta += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
