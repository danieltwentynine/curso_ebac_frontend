"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    ola() {
        return `${this.nome} disse ola`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; //protected esta disponivel na classe e nas classes que herda
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 0o22;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPF extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2; //polimorfismo do depositar -> essa linha tem bug hahaha
    }
}
const minhaConta = new ContaBancariaPF(123456789);
ContaBancaria.retornaNumeroDoBanco();
