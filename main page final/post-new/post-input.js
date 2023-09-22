export default class PostInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.userData = {
            nombre: '@Triky',
            fotoPerfil: 'pick.jpg',
        };
    }

    connectedCallback() {
        this.render();
        
        const publishButton = this.shadowRoot.querySelector('#publishButton');
        publishButton.addEventListener('click', () => {
            const postText = this.shadowRoot.querySelector('#postText').value;
            
            const event = new CustomEvent('postPublished', { 
                detail: {
                    postText: postText,
                    userData: this.userData, 
                }
            });
            this.dispatchEvent(event);
            
            this.shadowRoot.querySelector('#postText').value = '';
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./post-new/postBar.css">
        <div class="searchBar">
        <div class="box">
            <input id="postText" type="text" placeholder="Write yout thoughts...">
          </div>
            <button class="post-button" id="publishButton">Post</button>
        `;
    }
}

customElements.define('post-input', PostInput);
