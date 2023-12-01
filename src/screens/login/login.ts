import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

import styles from "./styles.css";
class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
  }

 
  async connectedCallback() {
    this.render();
    const button = this.shadowRoot?.querySelector('#signUpButton');
    button?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.SIGNUP))
    })
    const buttonLogin = this.shadowRoot?.querySelector('#logInButton');
    buttonLogin?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.MAIN))
    })

  }

  render() {

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
      <main style="display: flex; flex-direction: row; .cutImg: width: 500px; ">

      <div class="form-container">
        <img class="cutImg" src="./img/loginCut.png">
        <div class="form-block">
          <form>
          <button id="signUpButton">Sign Up</button>
          <h1>User</h1>
            <input type="email" placeholder="E-mail" />
            <h1>Password</h1>
            <input type="password" placeholder="Password" />
            <button id="logInButton">Log In</button>
          </form>
          <div class="line">
            <div class="linea"></div>
            <div class="leyenda">Or start with</div>
            <div class="linea"></div>
          </div>
          <img class="logoLine" src="./img/apple logo.png">
          <img class="logoLine" src="./img/google logo.png">
        </div>
      </div>

    `;
    }
  }
}

customElements.define("app-login", Login);
export default Login;