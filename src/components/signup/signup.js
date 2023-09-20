console.log("hola");

class SignUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./signup.css">

    <div class="form-container">
    <img class="cutImg" src="signUpCut.png">
    <div class="form-block">
     
      <form>
      <button>Log in</button>

        <h1>E-mail</h1>
        <input type="email" placeholder="E-mail" />
        <h1>User</h1>
        <input type="password" placeholder="User name" />
        <h1>Password</h1>
        <input type="email" placeholder="Password" />
        <h1>Repeat password</h1>
        <input type="password" placeholder="Password" />

       
        <button class="btn">Create account</button>
   
  </div>
  
          `;
  }
}

customElements.define("signup-container", SignUp);