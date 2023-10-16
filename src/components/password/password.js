class Password extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./password.css">
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
    Change your password
</h1>

    </div>

    <ul class="m-right">
 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Current password</p>
         <input type="password">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">New password</p>
         <input type="password">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Repeat password</p>
         <input type="password">
         </div>
 </li>

</ul>
<button>Save changes</button>

    </div>
    </div>
      `;
  
  
    }
  
  }
  
  customElements.define("password-form", Password);
  export default Password;