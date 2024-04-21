class Carta
{
    public static readonly personagens: string[] = ["bluray", "chara_BR", "cooki", "gina", "ivy_the_silly", "kent", "lobo_azul", "luizdudu", 
    "matt", "nexus", "psycheleven", "rerandom", "ronaldinho_soccer", "ryan", "ryn_rose", "shin", "SI_asirel", "steve", "Tecnos", "Welis"];

    public readonly nome: string;
    public readonly elemento: HTMLDivElement;

    public static verificar(): void
    {

    }

   
    public aoClicar = (): void =>
    {
        this.elemento.style.backgroundImage = "url('./src/img/personagens/" + this.nome + ".png')";
        //console.log(this);
        this.elemento.ondblclick = () => {this.elemento.style.removeProperty("background-image");}
        (window as any).partida
    }

    public constructor(personagem: string[] = new Array<string>())// Ao invés do 20usar o Array.length Math.floor(Math.random() * 20)
    {
        console.log();
        this.elemento = document.createElement<"div">("div");
        this.elemento.classList.add("carta");
        //this.nome = "";
        personagem = personagem.length === 0 ? Carta.personagens : Carta.personagens.filter(function(persona: string): boolean {return !personagem.includes(persona)});
        this.nome = personagem[Math.floor(Math.random() * personagem.length)]
        this.elemento.onclick = this.aoClicar;
        console.log(personagem);
        
    }
}

export {Carta};