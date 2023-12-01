import "./screens/dashboard/index";
import "./screens/login/login";
import "./screens/signup/signup";
import "./screens/main/index";
import "./components/export";
import "./screens/setProf/setting";
import "./screens/profile/profile";
import "./screens/settingMenu/settingMenu";
import "./components/password/password";
import "./components/accEmail/email";
import "./screens/explore/explore"
import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
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

      case Screens.SETTING:
        const settingProf = this.ownerDocument.createElement("set-prof");
        this.shadowRoot?.appendChild(settingProf);
        break;

      case Screens.MENUSET:
        const menuSet = this.ownerDocument.createElement("setting-menu");
        this.shadowRoot?.appendChild(menuSet);
        break;

      case Screens.PASS:
        const menuPass = this.ownerDocument.createElement("password-form");
        this.shadowRoot?.appendChild(menuPass);
        break;

      case Screens.EMAIL:
        const menuEmail = this.ownerDocument.createElement("email-form");
        this.shadowRoot?.appendChild(menuEmail);
        break;

      case Screens.DEACTIVATE:
        const menuDeac = this.ownerDocument.createElement("deactivate-form");
        this.shadowRoot?.appendChild(menuDeac);
        break;

        case Screens.EXPLORE:
        const explore = this.ownerDocument.createElement("explore-bar");
        this.shadowRoot?.appendChild(explore);
        break;

      default:
        break;
    }
  }
}

customElements.define("app-container", AppContainer);
