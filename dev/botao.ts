import { Carta } from "./carta.js";
import { Partida } from "./partida.js";

abstract class Botao
{
    public readonly elemento: HTMLDivElement;
    protected abstract aoClicar(...parametros: any): any;
    public constructor()
    {
        this.elemento = document.createElement<"div">("div");
        this.elemento.classList.add("botao");
        this.elemento.innerText = "TESTA";
        this.elemento.onclick = this.aoClicar;
    }
}


class Iniciar extends Botao
{
    public aoClicar(): void
    {
        (window as any).partida = new Partida();
        /*for (let carta of (window as any).partida.cartas)
        {
            document
        }*/

        document.querySelector<HTMLElement>("main")?.replaceChildren(...(window as any).partida.cartas.map((carta: Carta) => carta.elemento));
    }
    
    public constructor()
    {
        super();
        this.elemento.id = "re_iniciar";
        this.elemento.classList.toggle
    }
    
}

class Embaralhar extends Botao
{

    public aoClicar(): void 
    {
        alert("Clicou em Embaralhar");
    }
    
    public constructor()
    {
        super();
        this.elemento.id = "re_embaralhar";
    }
}


class TrocarModo extends Botao
{

    public aoClicar(): void 
    {
        alert((window as any).tela);
        
    }
    
    public constructor()
    {
        super();
        this.elemento.id = "modo_de_jogo";
    }
}

export {Iniciar, Embaralhar, TrocarModo};
/*
    - Classe para cada elemento. A classe vai conter o elemento html e os métodos para interagir com as outras classes (elementos) e o 
    programa principal como um todo.

    - Arquivo para funções do programa principal. As funções serão atualizarBotoes e atualizarCartas, entre as demais necessárias.

    - Arquivo para o programa principal. Ele vai importar as funções especiais e as classes de forma externa

    - Opção: fazer o programa oreintado aos eventos dos botões e usar o programa principal apenas para inicialização
*/