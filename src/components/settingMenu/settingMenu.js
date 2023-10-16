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
    <h1>Settings</h1>
    <p>See the information about your account, change your information or update it.</p>
    </div>

    <ul class="m-right">
    <li class="bold">
        <img src="../../../img/user2Icon.png">
        <div class="text-container">
            <p class="bold-p">Account Information</p>
            <p>See your account information.</p>
        </div>
    </li>

    <li class="bold">
        <img src="../../../img/keyIcon.png">
        <div class="text-container">
            <p class="bold-p">Change your password</p>
            <p>Change or update your password.</p>
        </div>
    </li>

    <li class="bold">
        <img src="../../../img/mailIcon.png">
        <div class="text-container">
            <p class="bold-p">Change your E-mail</p>
            <p>Change or update your E-mail.</p>
        </div>
    </li>

    <li class="bold">
        <img src="../../../img/circleIcon.png">
        <div class="text-container">
            <p class="bold-p">Deactivate your account</p>
            <p>Find out how you can deactivate or suspend your account.</p>
        </div>
    </li>
</ul>

    </div>
    </div>
        `;
  }
}
customElements.define("setting-menu", settingMenu);
export default settingMenu;
