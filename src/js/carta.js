class Carta {
    static verificar() {
    }
    constructor(personagem = new Array()) {
        this.aoClicar = () => {
            this.elemento.style.backgroundImage = "url('./src/img/personagens/" + this.nome + ".png')";
            this.elemento.ondblclick = () => { this.elemento.style.removeProperty("background-image"); };
            window.partida;
        };
        console.log();
        this.elemento = document.createElement("div");
        this.elemento.classList.add("carta");
        personagem = personagem.length === 0 ? Carta.personagens : Carta.personagens.filter(function (persona) { return !personagem.includes(persona); });
        this.nome = personagem[Math.floor(Math.random() * personagem.length)];
        this.elemento.onclick = this.aoClicar;
        console.log(personagem);
    }
}
Carta.personagens = ["bluray", "chara_BR", "cooki", "gina", "ivy_the_silly", "kent", "lobo_azul", "luizdudu",
    "matt", "nexus", "psycheleven", "rerandom", "ronaldinho_soccer", "ryan", "ryn_rose", "shin", "SI_asirel", "steve", "Tecnos", "Welis"];
export { Carta };
