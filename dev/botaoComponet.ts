class BotaoMenu extends HTMLElement
{
    constructor()
    {
        super();
        const shadowdoom: ShadowRoot = this.attachShadow({mode: "open"});
        //shadowdoom.appendChild(this.estilo());
        //shadowdoom.appendChild(this.body());
        shadowdoom.innerHTML = `
        <style>
            @import('../css/index.css');
            @import('../css/botoes.css');
        </style>

        <div class = 'botao'>TESTE</div>
        `;
    }

    estilo(): HTMLElement
    {
        const estilo = document.createElement("style");
        estilo.textContent = "@import('../css/botoes.css')";
        return estilo;
    }

    body(): HTMLElement
    {
        const div: HTMLElement = document.createElement("div");
        //div.setAttribute("class", "botao");
        //div.style.cssText = "@import('../css/botoes.css')";
        return div;
    }

}

customElements.define("botao-menu", BotaoMenu);