import styles from "./styles.css";
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { save } from "../../utils/firebase";

class SignUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const buttonLogin = this.shadowRoot?.querySelector('#loginButton');
    buttonLogin?.addEventListener('click', () => {
      dispatch(navigate(Screens.LOGIN));
    });

    const buttonCreateAcc = this.shadowRoot?.querySelector('#createBtn');
    buttonCreateAcc?.addEventListener('click', () => {
      if (this.createAccount()) {
        dispatch(navigate(Screens.MAIN));
      }
    });
  }

  createAccount() {
    const emailInput = this.shadowRoot?.querySelector('#email') as HTMLInputElement;
    const pass1Input = this.shadowRoot?.querySelector('#pass1') as HTMLInputElement;
    const pass2Input = this.shadowRoot?.querySelector('#pass2') as HTMLInputElement;

    const email = emailInput.value;
    const password1 = pass1Input.value;
    const password2 = pass2Input.value;

    if (password1 !== password2) {
      alert("Passwords don't match");
      return false;
    }

    alert(`User created succesfully\nEmail: ${email}\nPassword: ${password1}`);

    const form = this.shadowRoot?.querySelector('form') as HTMLFormElement;
    form.reset();

    return true;
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot.innerHTML += `
        <div class="form-container">
          <img class="cutImg" src="./img/signUpCut.png">
          <div class="form-block">
            <form>
              <button id="loginButton">Log in</button>
              <h1>E-mail</h1>
              <input type="email" id="email" placeholder="E-mail" />
              <h1>Password</h1>
              <input type="password" id="pass1" placeholder="Password" />
              <h1>Repeat password</h1>
              <input type="password" id="pass2" placeholder="Password" />
              <button class="btn" id="createBtn" onclick="save()" >Create account</button>
            </form>
          </div>
        </div>
      `;
    }
  }
}

customElements.define("signup-container", SignUp);
export default SignUp;
