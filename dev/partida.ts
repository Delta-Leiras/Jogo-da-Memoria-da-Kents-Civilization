import { Carta } from "./carta.js";
import { delay } from "./index.js";

class Partida
{
    private cartas: Carta[];
    private cartasClicadas: number;

    public constructor()
    {
        this.cartas = new Array<Carta>();
        let par: Set<string> = new Set<string>();
        let impar: Set<string> = new Set<string>();
        let erro: number = 0;

        while (par.size < 20 || impar.size < 20)
        {
            erro++;
            if (erro > 200) {console.log(this.cartas); console.log(Carta.personagens); throw new Error("Loop maior que 200");}
            
            
            this.cartas.unshift(new Carta(this.cartas.length % 2 === 0 ? [...impar] : [...par])); 

            console.log("Loop while: " + par.size + " : " + impar.size + "\n cartas: " + this.cartas);
            console.log("Carta gerada: ");
            console.log(this.cartas[0]);
            console.log("\n=============================================================================");
            
            

            if (this.cartas.length % 2 === 0)
            {
                if (par.has(this.cartas[0].nome))
                {
                    /*console.log("Entrou no true par\n\n\n ");
                    console.log(par);
                    
                    this.cartas.shift();*/
                }
                else
                {
                    console.log("Entrou no false par\n\n\n ");
                    par.add(this.cartas[0].nome);
                    //if (par.size == 20 && this.cartas.length < 40) {par = new Set<string>()}
                }
            }
            else
            {
                if (impar.has(this.cartas[0].nome))
                {
                    /*console.log("Entrou no true impar\n\n\n ");
                    console.log(impar);
                    
                    this.cartas.shift();*/
                }
                else
                {
                    console.log("Entrou no false impar\n\n\n ");
                    impar.add(this.cartas[0].nome);
                    //if (par.size == 20 && this.cartas.length < 40) {par = new Set<string>()}
                }
            }
        }
        
        this.cartasClicadas = 0;
        console.log(this.cartas);
    }

    private async slowpoke(tempo: number): Promise<void>
    {
        await delay(tempo);
    }

    private compararCartasClicadas():void {}

    public getCartasClicadas(): number
    {
        return this.cartasClicadas;
    }

    public setCartasClicadas(valor: number): void
    {
        this.cartasClicadas = valor;
    }

}

export {Partida};