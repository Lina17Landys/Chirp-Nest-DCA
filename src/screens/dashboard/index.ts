import styles from "./styles.css";
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

// No se porque me da un error al correr build por el nombre "Field 'browser' doesn't contain a valid alias configuration
// /Users/lina_landys/Desktop/trabajos/DCA/chirp nest/src/screens/dashboard/index.tsx doesn't exist" pov: si existe pero no??

class dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.render();
    const button = this.shadowRoot?.querySelector("#loginButton");
    button?.addEventListener("click", () => {
      dispatch(navigate(Screens.LOGIN));
    });

    const buttonSign = this.shadowRoot?.querySelector("#signUpButton");
    buttonSign?.addEventListener("click", () => {
      dispatch(navigate(Screens.SIGNUP));
    });
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
      <main style="display: flex; flex-direction: row; ">
      <img class="logoImg" src="./img/logo.png" id="logoImg">

      <div class="info-container">
      <h1>Welcome to Chirp Nest!</h1>
      <p>Within this platform you can express yourself freely, share content and interact with other people.
      Join now to be part of this community!</p>

      <button id="loginButton">Log in</button>
      <button id="appleButton">Log in with Apple</button>
      <div class="line">
      <div class="linea"></div>
      <div class="leyenda">Or</div>
      <div class="linea"></div>
    </div>
      <button id="signUpButton">Create Account</button>
<p>By signing up, you agree to the Terms of Service and Privacy Policy, including the Cookie Policy.</p>


      </div>
    `;
    }
  }
}

customElements.define("app-dashboard", dashboard);
export default dashboard;
