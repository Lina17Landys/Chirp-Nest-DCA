import styles from "./styles.css";
import { addObserver, appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/navigation";

export default class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    this.render();
    const button = this.shadowRoot?.querySelector('#logo');
    button?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.DASHBOARD))
    })
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
    
      <div class="sidebar">
                
      <nav>
          <ul class="navbar">
          <li><img class="logo" id="logo" src="./img/logo.png"></li>

          <li><img src="./img/homeIcon.png"><a href="#">Home</a></li>
          <li><img src="./img/searchIcon.png"><a href="#">Explore</a></li>
          <li><img src="./img/bellIcon.png"><a href="#">Notifications</a></li>
          <li><img src="./img/profileIcon.png"><a href="#">Profile</a></li>
              <div class="user">
                  <img src="./img/pick.jpg" alt="Profile Picture">
                  <button class="tweet-button">Tweet</button>
              </div>
          </ul>
      </nav>
  </div>
        `;
    }
  }
}

customElements.define("sidebar-component", Sidebar);