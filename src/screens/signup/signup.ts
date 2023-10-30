import styles from "./styles.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class SignUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.render();
    const button = this.shadowRoot?.querySelector('#loginButton');
    button?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.LOGIN))
    })
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML +=`
      <div class="form-container">
        <img class="cutImg" src="./img/signUpCut.png">
        <div class="form-block">
          <form>
            <button id="loginButton">Log in</button>
            <h1>E-mail</h1>
            <input type="email" placeholder="E-mail" />
            <h1>User</h1>
            <input type="password" placeholder="User name" />
            <h1>Password</h1>
            <input type="email" placeholder="Password" />
            <h1>Repeat password</h1>
            <input type="password" placeholder="Password" />
            <button class="btn">Create account</button>
          </form>
        </div>
      </div>
    `;
    }

  }

}

customElements.define("signup-container", SignUp);
export default SignUp;