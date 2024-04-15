var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Iniciar } from "./botao.js";
import { Carta } from "./carta.js";
window.tela = "oi";
window.onload = () => {
    let botao = new Iniciar();
    document.querySelector(".extras").appendChild(botao.elemento);
};
function atualizarTela() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let divs = document.querySelectorAll("div[class=carta]");
        let cartas = new Array(40);
        let dovs = new Array(40);
        for (let i = 0; i <= 39; i++) {
            yield delay(10);
            cartas[i] = new Carta([]);
            dovs[i] = cartas[i].elemento;
        }
        (_a = divs[0].parentNode) === null || _a === void 0 ? void 0 : _a.replaceChildren(...dovs);
    });
}
function sonic() {
    return __awaiter(this, void 0, void 0, function* () {
        let divs = document.querySelectorAll("botao-menu");
        console.log(divs);
    });
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
export { delay };
