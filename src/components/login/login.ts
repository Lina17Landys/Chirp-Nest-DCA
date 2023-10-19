import { SignUp } from "../export";
import styles from "./styles.css"
class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML +=`
      <div class="form-container">
        <img class="cutImg" src="./img/loginCut.png">
        <div class="form-block">
          <form>
          <a href="../src/components/signup/signup.ts"><button>Sign Up</button></a>
          <h1>User</h1>
            <input type="email" placeholder="E-mail" />
            <h1>Password</h1>
            <input type="password" placeholder="Password" />
            <button>Log In</button>
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

customElements.define("login-container", Login);
export default Login;

