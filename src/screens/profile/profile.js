class Profile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
      }

      render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
        <div class="container">

        <div class="sidebar">
                
        <nav>
            <ul class="navbar">
            <li><img class="logo" src="../../../img/logo.png"></li>
  
            <li>    <img src="../../../img/homeIcon.png"<a href="#">Home</a></li>
            <li><img src="../../../img/searchIcon.png"><a href="#">Explore</a></li>
            <li><img src="../../../img/bellIcon.png"><a href="#">Notifications</a></li>
            <li><img src="../../../img/profileIcon.png"><a href="#">Profile</a></li>
                <div class="user">
                    <img src="../../../img/profilePic.jpg" class="icon-small">
                    <button class="tweet-button">Tweet</button>
                </div>
            </ul>
        </nav>
    </div>

    <section class="user-profile">
    <img src="../../../img/banner.png" class="banner-big">
    
    <img src="../../../img/profilePic.jpg" class="icon-big">
    
    <div class="info">
    <div class="info-top">
    <div class="left-info">
      <h1>@Tricky</h1>
      <p>Tricky</p>
    </div>
    <button id="edit">Edit Profile</button>
  </div>
  <div class="info-middle">
    <p><img src="../../../img/calendarIcon.png">Joined on Oct 10</p>
    <div class="i-bottom">
    <p>Followers: 10</p>
    <p>Following: 3</p>
    </div>
  </div>
  <h2>Posts</h2>
</div>
    
    </section>

</div>


        `;
      }
}

customElements.define("user-profile", Profile)
export default Profile;