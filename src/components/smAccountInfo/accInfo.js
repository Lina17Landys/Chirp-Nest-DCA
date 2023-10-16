class AccInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./info.css">
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
    Account Information
</h1>

    </div>


    <ul class="m-right">
 <li class="bold">
     <div class="text-container">
         <p class="bold-p">User Name</p>
         <p>@this.yourUsername</p>
     </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">E-mail</p>
         <p>@this.yourEmail</p>
     </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Country/City</p>
         <p>@this.yourLocation</p>
     </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Lenguaje</p>
         <p>English</p>
     </div>
 </li>
</ul>

    </div>
    </div>
      `;
  
  
    }
  
  }
  
  customElements.define("info-account", AccInfo);
  export default AccInfo;