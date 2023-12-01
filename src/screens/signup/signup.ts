import styles from "./styles.css";
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
//import { save } from "../../utils/firebase";

class SignUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  
  }

  connectedCallback() {
    this.render();

    setTimeout(() => {
      const buttonLogin = this.shadowRoot?.querySelector('#loginButton');
      buttonLogin?.addEventListener('click', () => {
        dispatch(navigate(Screens.LOGIN));
      });

      const buttonCreateAcc = this.shadowRoot?.querySelector('#createBtn');
      buttonCreateAcc?.addEventListener('click', async (event) => {
        event.preventDefault();

        const emailInput = this.shadowRoot?.querySelector('#email') as HTMLInputElement;
        const pass1Input = this.shadowRoot?.querySelector('#pass1') as HTMLInputElement;

        if (this.createAccount()) {
         // await save({ email: emailInput.value, password: pass1Input.value });
          dispatch(navigate(Screens.MAIN));
        }
      });
    }, 0);
  }

  createAccount() {
    const emailInput = this.shadowRoot?.querySelector('#email') as HTMLInputElement;
    const pass1Input = this.shadowRoot?.querySelector('#pass1') as HTMLInputElement;
    const pass2Input = this.shadowRoot?.querySelector('#pass2') as HTMLInputElement;

    const email = emailInput.value;
    const password1 = pass1Input.value;
    const password2 = pass2Input.value;

    console.log("Email:", email);
    console.log("Password1:", password1);
    console.log("Password2:", password2);

    if (password1 !== password2) {
      alert("Passwords don't match");
      return false;
    }

    alert(`User created successfully\nEmail: ${email}`);

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

      const container = this.ownerDocument.createElement("div");
      container.classList.add("form-container");

      const cutImg = this.ownerDocument.createElement("img");
      cutImg.classList.add("cutImg");
      cutImg.src = "./img/signUpCut.png";
      container.appendChild(cutImg);

      const formBlock = this.ownerDocument.createElement("div");
      formBlock.classList.add("form-block");

      const form = this.ownerDocument.createElement("form");

      const loginButton = this.ownerDocument.createElement("button");
      loginButton.id = "loginButton";
      loginButton.textContent = "Log in";
      loginButton.addEventListener('click', () => {
        dispatch(navigate(Screens.LOGIN));
      });
      form.appendChild(loginButton);

      const emailLabel = this.ownerDocument.createElement("h1");
      emailLabel.textContent = "E-mail";
      form.appendChild(emailLabel);

      const emailInput = this.ownerDocument.createElement("input");
      emailInput.type = "email";
      emailInput.id = "email";
      emailInput.placeholder = "E-mail";
      form.appendChild(emailInput);

      const passLabel = this.ownerDocument.createElement("h1");
      passLabel.textContent = "Password";
      form.appendChild(passLabel);

      const pass1Input = this.ownerDocument.createElement("input");
      pass1Input.type = "password";
      pass1Input.id = "pass1";
      pass1Input.placeholder = "Password";
      form.appendChild(pass1Input);

      const repeatPassLabel = this.ownerDocument.createElement("h1");
      repeatPassLabel.textContent = "Repeat password";
      form.appendChild(repeatPassLabel);

      const pass2Input = this.ownerDocument.createElement("input");
      pass2Input.type = "password";
      pass2Input.id = "pass2";
      pass2Input.placeholder = "Password";
      form.appendChild(pass2Input);

      const createButton = this.ownerDocument.createElement("button");
      createButton.classList.add("btn");
      createButton.id = "createBtn";
      createButton.textContent = "Create account";
      form.appendChild(createButton);

      formBlock.appendChild(form);
      container.appendChild(formBlock);
      this.shadowRoot?.appendChild(container);

      
    }
  }
}

customElements.define("signup-container", SignUp);
export default SignUp;
