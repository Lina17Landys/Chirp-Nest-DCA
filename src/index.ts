import "./screens/dashboard"
import "./screens/login"
import "./components/export"
import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        switch (appState.screen) {
        case Screens.DASHBOARD:
            const dashboard = this.ownerDocument.createElement("app-dashboard");
            this.shadowRoot?.appendChild(dashboard);
            break;
    
        case Screens.LOGIN:
            const login = this.ownerDocument.createElement("app-login");
            this.shadowRoot?.appendChild(login);
            break;
    
        default:
            break;
        }
    }
}

customElements.define('app-container', AppContainer)
