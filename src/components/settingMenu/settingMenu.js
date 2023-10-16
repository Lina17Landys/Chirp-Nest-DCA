class settingMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="setting.css">
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
    <h1>Settings</h1>
    <p>See the information about your account, change your information or update it.</p>
    <ul class="m-right">

<li class="bold"><img src="../../../img/profileIcon.png">Account Information
<p>See your account information.</p>
</li>

<li class="bold"><img src="../../../img/keyIcon.png">Change your password
<p>Change or update your password.</p>
</li>

<li class="bold"><img src="../../../img/mailIcon.png">Change your E-mail
<p>Change or update your E-mail.</p>
</li>

<li class="bold"><img src="../../../img/circleIcon.png">Deactivate your account
<p>Find out how you can deactivate or suspend your account.</p>
</li>

    </ul>
    </div>
        `;
  }
}
customElements.define("setting-menu", settingMenu);
export default settingMenu;
