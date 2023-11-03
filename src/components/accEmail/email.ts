import styles from "./styles.css"
import { addObserver, appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import Sidebar from "../../screens/main/navegacion/sidebar";

class Email extends HTMLElement {
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
    Change your E-mail
</h1>

    </div>

    <ul class="m-right">
 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Current E-mail</p>
         <input type="email">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">New E-mail</p>
         <input type="email">
         </div>
 </li>



</ul>
<button class="save-btn">Save changes</button>
    </div>
    </div>
      `;
    }
  }
}

customElements.define("email-form", Email);
export default Email;
