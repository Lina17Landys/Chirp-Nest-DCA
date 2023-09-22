import "./navegacion/sidebar.js"; 
import "./generate-post/index.js"; 
import "./post-new/post-input.js";

class CombinedComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const postInput = this.shadowRoot.querySelector("post-input");
    const appContainer = this.shadowRoot.querySelector("app-container");

    postInput.addEventListener("postPublished", (event) => {
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

      appContainer.shadowRoot.querySelector("#tweet-column").prepend(newPost);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./styles.css">
      <div class="container">
        <sidebar-component></sidebar-component>
        </div>

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
       
          <app-container></app-container>
        
        </div>
        
      </div>
  
        `;
  }
}

customElements.define("combined-component", CombinedComponent);
