import { Partida } from "./partida.js";
class Botao {
    constructor() {
        this.elemento = document.createElement("div");
        this.elemento.classList.add("botao");
        this.elemento.innerText = "TESTA";
        this.elemento.onclick = this.aoClicar;
    }
}
class Iniciar extends Botao {
    aoClicar() {
        var _a;
        window.partida = new Partida();
        (_a = document.querySelector("main")) === null || _a === void 0 ? void 0 : _a.replaceChildren(...window.partida.cartas.map((carta) => carta.elemento));
    }
    constructor() {
        super();
        this.elemento.id = "re_iniciar";
        this.elemento.classList.toggle;
    }
}
class Embaralhar extends Botao {
    aoClicar() {
        alert("Clicou em Embaralhar");
    }
    constructor() {
        super();
        this.elemento.id = "re_embaralhar";
    }
}
class TrocarModo extends Botao {
    aoClicar() {
        alert(window.tela);
    }
    constructor() {
        super();
        this.elemento.id = "modo_de_jogo";
    }
}
export { Iniciar, Embaralhar, TrocarModo };
