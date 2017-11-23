import { html, render } from '/node_modules/lit-html/lit-html.js';

export class HomeMain extends HTMLElement {
    constructor() {
        super();
        render(this.html(), this.attachShadow({mode: 'open'}));
    }
    html() {
        return html`
            <p>Hello, This is Main</p>
        `;
    }
}