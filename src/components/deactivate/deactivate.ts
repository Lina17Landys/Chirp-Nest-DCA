import styles from "./styles.css"
import Sidebar from "../../screens/main/navegacion/sidebar";
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class Deactivate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    async connectedCallback() {
      this.render();
      const back = this.shadowRoot?.querySelector('#back');
      back?.addEventListener(('click'), () =>{
        dispatch(navigate(Screens.MENUSET))
      })


      const save = this.shadowRoot?.querySelector('#save');
      save?.addEventListener(('click'), () =>{
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
        <div class="container">
        <sidebar-component></sidebar-component>


    <div class="menu-right">
    <div class="top">
    <h1 class="centered-header">
    <img src="../../../img/ArrowIcon.png" id="back">
    Deactivate your account
</h1>
    </div>

    <div class="text-content">

    <div class="header-1">
   <p class="bold-p">@this.userName</p>
   <p class="bold-p">This will deactivate your account</p>

<p>You’re about to start the process of deactivating your account. Your display name, @username, and public profile will no longer be viewable.</p>
</div>
<h1>You should also know...</h1>
<p>
You can restore your Chirp Nest account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.
If you just want to change your @username, you don’t need to deactivate your account edit it in your settings.
To use your current @username or email address with a different account, change them before you deactivate this account.
</p>
</div>
<button class="save-btn" id="save">Deactivate</button>
    </div>
    </div>
      `;
  
      }
    }
  
  }
  
  customElements.define("deactivate-form", Deactivate);
  export default Deactivate;