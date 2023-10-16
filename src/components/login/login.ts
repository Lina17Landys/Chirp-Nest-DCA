class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  redirectToSignUp() {
    window.location.href = "./components/signup/signup.ts"; 
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <link rel="stylesheet" href="./src/components/login/login.css">
      <div class="form-container">
        <img class="cutImg" src="./img/loginCut.png">
        <div class="form-block">
          <form>
            <button id="signupButton">Sign Up</button>
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

    const signupButton = this.shadowRoot!.getElementById("signupButton");
    signupButton!.addEventListener("click", this.redirectToSignUp);
  }
}

customElements.define("login-container", Login);
export default Login;
