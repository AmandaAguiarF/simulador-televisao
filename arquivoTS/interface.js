"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var televisao_1 = require("./televisao");
var prompt = promptSync();
var ControleRemoto = /** @class */ (function () {
    function ControleRemoto() {
        this.televisao = new televisao_1.Televisao();
    }
    ControleRemoto.prototype.iniciar = function () {
        console.log("Controle remoto da TV iniciado.");
        while (true) {
            var opcao = prompt("\nEscolha uma opção:\n1 - Ligar/Desligar\n2 - Mudar canal\n3 - Aumentar volume\n4 - Diminuir volume\n5 - Acessar Netflix\n6 - Acessar Youtube\n7 - Sair\nOpção: ");
            switch (opcao) {
                case '1':
                    this.televisao.ligarDesligar();
                    break;
                case '2':
                    var novoCanal = prompt("Novo canal: ");
                    this.televisao.mudarCanal(parseInt(novoCanal));
                    break;
                case '3':
                    this.televisao.aumentarVolume();
                    break;
                case '4':
                    this.televisao.diminuirVolume();
                    break;
                case '5':
                    this.televisao.acessarNetflix();
                    break;
                case '6':
                    this.televisao.acessarYoutube();
                    break;
                case '7':
                    console.log("Encerrando o programa.");
                    return;
                default:
                    console.log("Opção inválida.");
            }
        }
    };
    return ControleRemoto;
}());
// Instanciando e iniciando o controle remoto
var controle = new ControleRemoto();
controle.iniciar();
