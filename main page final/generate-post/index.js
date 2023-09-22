export default class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.loadTweets(); 
        this.simulateRealTimeTweets(); 
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div id="tweet-column"></div>
        `;
    }

    loadTweets() {
        const tweetColumn = this.shadowRoot.querySelector('#tweet-column');

        const tweets = [
            {
                user: 'omgNJ12',
                content: 'I like music and dancing.',
            },
            {
                user: 'banBaN',
                content: 'I like programming. #coding #webdev',
            },
        ];

        tweets.forEach(tweetData => {
            const tweetDiv = this.createTweetElement(tweetData);
            tweetColumn.appendChild(tweetDiv);
        });
    }

    createTweetElement(tweetData) {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');

        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');
        userDiv.innerHTML = `
        <link rel="stylesheet" href="./generate-post/styles.css">

            <img src="pexels-photo.jpg" alt="Profile Picture" class="profile-pic">
            <h2>@${tweetData.user}</h2>
        `;

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = tweetData.content;

        tweetDiv.appendChild(userDiv);
        tweetDiv.appendChild(contentParagraph);

        return tweetDiv;
    }

    simulateRealTimeTweets() {
        setInterval(() => {
            // Simular la obtención de nuevos tweets desde una fuente de datos (puedes cargarlos desde un servidor)
            const newTweetData = {
                user: 'pepitox777',
                content: 'This is a tweet in real time. #realtime',
            };

            const tweetColumn = this.shadowRoot.querySelector('#tweet-column');
            const tweetDiv = this.createTweetElement(newTweetData);

            // Agregar el nuevo tweet en la parte superior
            tweetColumn.insertBefore(tweetDiv, tweetColumn.firstChild);
        }, 10000); // Cada 10 segundos
    }
}

customElements.define('app-container', App);
