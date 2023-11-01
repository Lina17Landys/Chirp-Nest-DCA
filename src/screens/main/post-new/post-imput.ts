import styles from "./styles.css";

interface UserData {
    nombre: string;
    fotoPerfil: string;
}

export default class PostInput extends HTMLElement {
    userData: UserData; 

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.userData = {
            nombre: '@Triky',
            fotoPerfil: './img/profilePic.jpg',
        };
    }

    connectedCallback() {
        this.render();
    
        const publishButton = this.shadowRoot!.querySelector('#publishButton') as HTMLButtonElement;
        const postTextInput = this.shadowRoot!.querySelector('#postText') as HTMLInputElement;

        // Cargar contenido del localStorage si existe
        const savedPostText = localStorage.getItem('savedPostText');
        if (savedPostText) {
            postTextInput.value = savedPostText;
        }
    
        publishButton.addEventListener('click', () => {
            const postText = postTextInput.value;
    
            if (postText.trim() !== '') {
                // Guardar el contenido en el localStorage
                localStorage.setItem('savedPostText', postText);
    
                const event = new CustomEvent('postPublished', {
                    detail: {
                        postText: postText,
                        userData: this.userData,
                    },
                });
                this.dispatchEvent(event);
    
                postTextInput.value = '';
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
            <div class="searchBar">
                <div class="box">
                    <input id="postText" type="text" placeholder="Write your thoughts..." required>
                </div>
                <button class="post-button" id="publishButton">Post</button>
            </div>
            `;
        }
    }
}

customElements.define('post-input', PostInput);

