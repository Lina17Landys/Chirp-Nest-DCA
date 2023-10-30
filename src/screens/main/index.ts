import "./navegacion/sidebar";
import "./generate-post/index"; 
import "./post-new/post-imput";
import styles from "./styles.css";


class CombinedComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();


    const postInput = this.shadowRoot?.querySelector("post-input");
    const appContainer = this.shadowRoot?.querySelector("app-container");


    postInput?.addEventListener("postPublished", (event) => {
      if (event instanceof CustomEvent) {
        const { postText, userData } = event.detail;
    
        const newPost = document.createElement("div");
        newPost.classList.add("tweet");
    
      newPost.innerHTML = `
          <div class="user-info">
            <img src="${userData.fotoPerfil}" alt="Foto de Perfil">
            <h2>${userData.nombre}</h2>
          </div>
          <p>${postText}</p>
        `;
    
        const appContainer = this.shadowRoot?.querySelector("app-container");
    
        appContainer?.shadowRoot?.querySelector("#tweet-column")?.prepend(newPost);
      }
    });

    
      }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``

  const css = this.ownerDocument.createElement("style");
  css.innerHTML = styles;
  this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
    <main style="  background: rgb(36, 21, 57); display: flex; flex-direction: row;  margin: 0; padding: 0;">
        <sidebar-component></sidebar-component>
        <div class="content">


        <div class="static-zone">
          <div class="top-text">Home</div>
          <div class="bottom-text-container">
            <div class="bottom-text">For you</div>
            <div class="bottom-text2">Following</div>
          </div>
          <div class="post-input">
            <post-input></post-input>
          </div>
        </div>

        <div class="tweet-blocks">

          <base-tweets></base-tweets>

        </div>

      </div>
      </main>
      

        `;
    }
  }
}

customElements.define("combined-component", CombinedComponent);
