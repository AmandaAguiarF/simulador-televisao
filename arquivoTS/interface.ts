import promptSync = require('prompt-sync');
import { Televisao } from './televisao';

const prompt = promptSync();

class ControleRemoto {
    private televisao: Televisao;

    constructor() {
        this.televisao = new Televisao();
    }

    iniciar(): void {
        console.log("Controle remoto da TV iniciado.");

        while (true) {
            const opcao = prompt(
                "\nEscolha uma opção:\n1 - Ligar/Desligar\n2 - Mudar canal\n3 - Aumentar volume\n4 - Diminuir volume\n5 - Acessar Netflix\n6 - Acessar Youtube\n7 - Sair\nOpção: "
            );

            switch (opcao) {
                case '1':
                    this.televisao.ligarDesligar();
                    break;
                case '2':
                    const novoCanal = prompt("Novo canal: ");
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
    }
}

// Instanciando e iniciando o controle remoto
const controle = new ControleRemoto();
controle.iniciar();
