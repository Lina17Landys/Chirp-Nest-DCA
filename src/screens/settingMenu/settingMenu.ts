import styles from "./styles.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import Sidebar from "../main/navegacion/sidebar"

class settingMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  connectedCallback() {
    this.render();
    const buttonBack = this.shadowRoot?.querySelector("#back");
    buttonBack?.addEventListener("click", () => {
      dispatch(navigate(Screens.PROFILE));
    });
  }

  render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
  
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
  
        this.shadowRoot!.innerHTML +=`
        <main style=" display: flex; flex-direction: row;  margin: 0; padding: 0;">

        <sidebar-component></sidebar-component>

    <div class="menu-right">
    <div class="top">
    <h1>Settings</h1>
    <p>See the information about your account, change your information or update it.</p>
    </div>

    <ul class="m-right">

    <li class="bold">
        <img src="../../../img/keyIcon.png">
        <div class="text-container">
            <p class="bold-p" id="passInfo">Change your password</p>
            <p>Change or update your password.</p>
        </div>
    </li>

    <li class="bold">
        <img src="../../../img/mailIcon.png">
        <div class="text-container">
            <p class="bold-p" id="emailInfo">Change your E-mail</p>
            <p>Change or update your E-mail.</p>
        </div>
    </li>

    <li class="bold">
        <img src="../../../img/circleIcon.png">
        <div class="text-container">
            <p class="bold-p" id="deactInfo">Deactivate your account</p>
            <p>Find out how you can deactivate or suspend your account.</p>
        </div>
    </li>
</ul>

    </div>
    </div>
        `;
    }
  }
}
customElements.define("setting-menu", settingMenu);
export default settingMenu;
