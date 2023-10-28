import styles from "./styles.css";
class Landing extends HTMLElement {
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

      this.shadowRoot!.innerHTML += `
      <main style="display: flex; flex-direction: row;">

      <img src="./img/logo.png">

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

customElements.define("app-container", Landing);
export default Landing;
