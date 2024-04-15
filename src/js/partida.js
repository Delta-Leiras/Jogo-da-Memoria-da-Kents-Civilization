var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Carta } from "./carta.js";
import { delay } from "./index.js";
class Partida {
    constructor() {
        this.cartas = new Array();
        let par = new Set();
        let impar = new Set();
        let erro = 0;
        while (par.size < 20 || impar.size < 20) {
            erro++;
            if (erro > 200) {
                console.log(this.cartas);
                console.log(Carta.personagens);
                throw new Error("Loop maior que 200");
            }
            this.cartas.unshift(new Carta(this.cartas.length % 2 === 0 ? [...impar] : [...par]));
            console.log("Loop while: " + par.size + " : " + impar.size + "\n cartas: " + this.cartas);
            console.log("Carta gerada: ");
            console.log(this.cartas[0]);
            console.log("\n=============================================================================");
            if (this.cartas.length % 2 === 0) {
                if (par.has(this.cartas[0].nome)) {
                }
                else {
                    console.log("Entrou no false par\n\n\n ");
                    par.add(this.cartas[0].nome);
                }
            }
            else {
                if (impar.has(this.cartas[0].nome)) {
                }
                else {
                    console.log("Entrou no false impar\n\n\n ");
                    impar.add(this.cartas[0].nome);
                }
            }
        }
        this.cartasClicadas = 0;
        console.log(this.cartas);
    }
    slowpoke(tempo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delay(tempo);
        });
    }
    compararCartasClicadas() { }
}
export { Partida };
