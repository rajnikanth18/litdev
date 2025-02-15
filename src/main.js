import { LitElement, html, css } from "lit-element";
import { Router } from '@lit-labs/router';
import './css/style.css';
import './components/DashboardComponent.js';

export class LitdevApplication extends LitElement {

static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
    `;
}

constructor() {
    super();      
}


render() {
    return html`
       <main>       
           <dashboard-component></dashboard-component>
       </main>
    `;
  }
  
}

window.customElements.define('litdev-application', LitdevApplication);


