export class Televisao {
    private ligada: boolean;
    private canalAtual: number;
    private volume: number;

    constructor() {
        this.ligada = false;
        this.canalAtual = 1; 
        this.volume = 50;
    }

    ligarDesligar(): void {
        this.ligada = !this.ligada;
        this.exibirStatus();
    }

    mudarCanal(novoCanal: number): void {
        if (this.ligada && novoCanal >= 1 && novoCanal <= 100) {
            this.canalAtual = novoCanal;
            this.exibirStatus();
        } else {
            console.log("Canal inválido ou TV desligada.");
        }
    }

    acessarNetflix(): void {
        if (this.ligada) {
            this.canalAtual = 101; // Canal da Netflix
            console.log("Acessando Netflix...");
            this.exibirStatus();
        } else {
            console.log("TV desligada. Não é possível acessar a Netflix.");
        }
    }

    acessarYoutube(): void {
        if (this.ligada) {
            this.canalAtual = 102; // Canal do Youtube
            console.log("Acessando Youtube...");
            this.exibirStatus();
        } else {
            console.log("TV desligada. Não é possível acessar o Youtube.");
        }
    }

    aumentarVolume(): void {
        if (this.ligada && this.volume < 100) {
            this.volume++;
            this.exibirStatus();
        } else {
            console.log("Volume máximo atingido ou TV desligada.");
        }
    }

    diminuirVolume(): void {
        if (this.ligada && this.volume > 0) {
            this.volume--;
            this.exibirStatus();
        } else {
            console.log("Volume mínimo atingido ou TV desligada.");
        }
    }

    exibirStatus(): void {
        if (this.ligada) {
            console.log(`TV ligada. Canal: ${this.canalAtual}, Volume: ${this.volume}`);
        } else {
            console.log("TV desligada.");
        }
    }
}
