import styles from "./styles.css"

class Deactivate extends HTMLElement {
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
        <link rel="stylesheet" href="./Deactivate.css">
        <div class="container">
        <div class="sidebar">
                
        <nav>
            <ul class="navbar">
            <li><img class="logo" src="../../../img/logo.png"></li>

            <li><img src="../../../img/homeIcon.png"><a href="#">Home</a></li>
            <li><img src="../../../img/searchIcon.png"><a href="#">Explore</a></li>
            <li><img src="../../../img/bellIcon.png"><a href="#">Notifications</a></li>
            <li><img src="../../../img/profileIcon.png"><a href="#">Profile</a></li>
                <div class="user">
                    <img src="../../../img/profilePic.jpg" alt="Profile Picture">
                    <button class="tweet-button">Tweet</button>
                </div>
            </ul>
        </nav>
    </div>

    <div class="menu-right">
    <div class="top">
    <h1 class="centered-header">
    <img src="../../../img/ArrowIcon.png">
    Deactivate your account
</h1>
    </div>

    <div class="text-content">

    <div class="header-1">
   <p class="bold-p">@this.userName</p>
   <p class="bold-p">This will deactivate your account</p>

<p>You’re about to start the process of deactivating your account. Your display name, @username, and public profile will no longer be viewable.</p>
</div>
<h1>You should also know...</h1>
<p>
You can restore your Chirp Nest account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.
If you just want to change your @username, you don’t need to deactivate your account edit it in your settings.
To use your current @username or email address with a different account, change them before you deactivate this account.
</p>
</div>
<button class="save-btn">Deactivate</button>
    </div>
    </div>
      `;
  
      }
    }
  
  }
  
  customElements.define("deactivate-form", Deactivate);
  export default Deactivate;