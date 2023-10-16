class Email extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./email.css">
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
    Change your E-mail
</h1>

    </div>

    <ul class="m-right">
 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Current E-mail</p>
         <input type="email">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">New E-mail</p>
         <input type="email">
         </div>
 </li>



</ul>
<button class="save-btn">Save changes</button>
    </div>
    </div>
      `;
  
  
    }
  
  }
  
  customElements.define("email-form", Email);
  export default Email;