export default class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./navegacion/styles.css">
            <div class="sidebar">
                
                <nav>
                    <ul class="navbar">
                    <li><img class="logo" src="./logo.png"></li>

                    <li><img src="./home.png"><a href="#">Home</a></li>
                    <li><img src="./search.png"><a href="#">Explore</a></li>
                    <li><img src="./bell.png"><a href="#">Notifications</a></li>
                    <li><img src="./profile.png"><a href="#">Profile</a></li>
                        <div class="user">
                            <img src="pick.jpg" alt="Profile Picture">
                            <button class="tweet-button">Tweet</button>
                        </div>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define('sidebar-component', Sidebar);
