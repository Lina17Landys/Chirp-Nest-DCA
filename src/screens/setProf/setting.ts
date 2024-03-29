import styles from "./styles.css"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

class SetProf extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const buttonBack = this.shadowRoot?.querySelector("#back");
    buttonBack?.addEventListener("click", () => {
      dispatch(navigate(Screens.PROFILE));
    });

    const buttonOut = this.shadowRoot?.querySelector("#logOut");
    buttonOut?.addEventListener("click", () => {
      dispatch(navigate(Screens.DASHBOARD));
    });

    const buttonPriv = this.shadowRoot?.querySelector("#privacy");
    buttonPriv?.addEventListener("click", () => {
      dispatch(navigate(Screens.MENUSET));
    });
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
        <img src="./img/ArrowIcon.png" id="back">
      <div class="form">
          <label for="username">Username:</label>
          <input type="text" id="username" required>
          
          <label for="name">Name:</label>
          <input type="text" id="name" required>
          
          <label for "biography">Biography:</label>
          <textarea id="biography"></textarea>
          
          <label for="location">Location:</label>
          <input type="text" id="location">
          
          <button type="button" id="privacy">Privacy Settings</button>
          <button type="button" id="logOut">Log Out</button>
       </div>
      `;
    }
  }
}

customElements.define("set-prof", SetProf);
export default SetProf;
