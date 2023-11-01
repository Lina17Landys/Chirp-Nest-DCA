import "./screens/dashboard/index"
import "./screens/login/login"
import "./screens/signup/signup"
import "./screens/main/index"
import "./components/export"
import "./screens/profile/profile"
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
        
            case Screens.SIGNUP:
                const signup = this.ownerDocument.createElement("signup-container");
                this.shadowRoot?.appendChild(signup);
                break;
    
                case Screens.MAIN:
                    const main = this.ownerDocument.createElement("combined-component");
                    this.shadowRoot?.appendChild(main);
                    break;

                    case Screens.PROFILE:
                        const profile = this.ownerDocument.createElement("user-profile");
                        this.shadowRoot?.appendChild(profile);
                        break;
    
        default:
            break;
        }
    }
}

customElements.define('app-container', AppContainer)
