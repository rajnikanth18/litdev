import { LitElement, css, html } from 'lit-element';
import './../css/style.css';

export class DashboardComponent extends LitElement{

    static get properties() {
        return {
            dashboard_msg: {type: String}
        }
    }

    constructor() {
        super();
        this.dashboard_msg = 'Welcome to Litdev Application Dashboard';
    }

    render(){
        return html`
            <div class="container">
                <main>
                    <div class="home-block">
                        ${this.dashboard_msg}
                    </div>   
                </main>        
            </div>
    `
    } 

}

window.customElements.define('dashboard-component', DashboardComponent)
