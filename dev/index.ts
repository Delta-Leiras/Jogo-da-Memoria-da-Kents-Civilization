import {Iniciar, Embaralhar, TrocarModo} from "./botao.js";
import { Carta } from "./carta.js";
import { Partida } from "./partida.js";


(window as any).tela = "oi";
window.onload = (): void =>
{
    let botao = new Iniciar();
    document.querySelector<any>(".extras").appendChild(botao.elemento);
    //alert((this as any).tela);
    //atualizarTela();
    //sonic();
}


async function atualizarTela(): Promise<void>
{
    let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div[class=carta]");
    let cartas: Carta[] = new Array<Carta>(40);
    let dovs: HTMLDivElement[] = new Array<HTMLDivElement>(40);
    for (let i = 0; i <= 39; i++)
    {
        await delay(10);
        cartas[i] = new Carta([]);
        dovs[i] = cartas[i].elemento;
    }
    divs[0].parentNode?.replaceChildren(...dovs);
    //dovs[0].replaceWith();
}

async function sonic(): Promise<void> 
{
    let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("botao-menu");
    console.log(divs);
}

function delay(time: number): Promise<void>
{
    return new Promise(resolve => setTimeout(resolve, time));
}
export {delay};