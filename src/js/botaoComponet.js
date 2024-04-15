"use strict";
class BotaoMenu extends HTMLElement {
    constructor() {
        super();
        const shadowdoom = this.attachShadow({ mode: "open" });
        shadowdoom.innerHTML = `
        <style>
            @import('../css/index.css');
            @import('../css/botoes.css');
        </style>

        <div class = 'botao'>TESTE</div>
        `;
    }
    estilo() {
        const estilo = document.createElement("style");
        estilo.textContent = "@import('../css/botoes.css')";
        return estilo;
    }
    body() {
        const div = document.createElement("div");
        return div;
    }
}
customElements.define("botao-menu", BotaoMenu);
