import styles from "./styles.css";
interface TweetData {
  user: string;
  content: string;
}

export default class BaseTweets extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.render();
    this.loadTweets();
    this.simulateRealTimeTweets();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const css = this.ownerDocument.createElement("style");
      css.innerHTML = styles;
      this.shadowRoot?.appendChild(css);

      this.shadowRoot!.innerHTML += `
    <div class="tweet">
    </div>
            <div id="tweet-column"></div>
        `;
    }
  }

  loadTweets() {
    const tweetColumn = this.shadowRoot?.querySelector("#tweet-column");

    const tweets = [
      {
        user: "omgNJ12",
        content: "I like music and dancing.",
      },
      {
        user: "banBaN",
        content: "I like programming. #coding #webdev",
      },
    ];

    tweets.forEach((tweetData) => {
      const tweetDiv = this.createTweetElement(tweetData);
      if (tweetColumn) {
        tweetColumn.appendChild(tweetDiv);
      }
    });
  }

  createTweetElement(tweetData: TweetData) {
    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-info");
    userDiv.innerHTML = `
        
            <img src="./img/pexels-photo.jpg" alt="Profile Picture" class="profile-pic">
            <h2>@${tweetData.user}</h2>
        `;

    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = tweetData.content;

    tweetDiv.appendChild(userDiv);
    tweetDiv.appendChild(contentParagraph);

    return tweetDiv;
  }

  simulateRealTimeTweets() {
    setInterval(() => {
      const newTweetData = {
        user: "pepitox777",
        content: "This is a tweet in real time. #realtime",
      };

      const tweetColumn = this.shadowRoot?.querySelector("#tweet-column");
      const tweetDiv = this.createTweetElement(newTweetData);

      tweetColumn!.insertBefore(tweetDiv, tweetColumn!.firstChild);
    }, 10000);
  }
}

customElements.define("base-tweets", BaseTweets);

