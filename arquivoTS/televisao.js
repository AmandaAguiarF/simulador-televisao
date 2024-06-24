'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Televisao = void 0;
var Televisao = /** @class */ (function () {
  function Televisao() {
    this.ligada = false;
    this.canalAtual = 1;
    this.volume = 20;
  }
  Televisao.prototype.ligarDesligar = function () {
    this.ligada = !this.ligada;
    this.exibirStatus();
  };
  Televisao.prototype.mudarCanal = function (novoCanal) {
    if (this.ligada && novoCanal >= 1 && novoCanal <= 100) {
      this.canalAtual = novoCanal;
      this.exibirStatus();
    } else {
      console.log('Canal inválido ou TV desligada.');
    }
  };
  Televisao.prototype.acessarNetflix = function () {
    if (this.ligada) {
      this.canalAtual = 101; // Canal da Netflix
      console.log('Acessando Netflix...');
      this.exibirStatus();
    } else {
      console.log('TV desligada. Não é possível acessar a Netflix.');
    }
  };
  Televisao.prototype.acessarYoutube = function () {
    if (this.ligada) {
      this.canalAtual = 102; // Canal do Youtube
      console.log('Acessando Youtube...');
      this.exibirStatus();
    } else {
      console.log('TV desligada. Não é possível acessar o Youtube.');
    }
  };
  Televisao.prototype.aumentarVolume = function () {
    if (this.ligada && this.volume < 100) {
      this.volume++;
      this.exibirStatus();
    } else {
      console.log('Volume máximo atingido ou TV desligada.');
    }
  };
  Televisao.prototype.diminuirVolume = function () {
    if (this.ligada && this.volume > 0) {
      this.volume--;
      this.exibirStatus();
    } else {
      console.log('Volume mínimo atingido ou TV desligada.');
    }
  };
  Televisao.prototype.exibirStatus = function () {
    if (this.ligada) {
      console.log(
        'TV ligada. Canal: '
          .concat(this.canalAtual, ', Volume: ')
          .concat(this.volume)
      );
    } else {
      console.log('TV desligada.');
    }
  };
  return Televisao;
})();
exports.Televisao = Televisao;
