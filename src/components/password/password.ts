import styles from "./styles.css"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import Sidebar from "../../screens/main/navegacion/sidebar";

class Password extends HTMLElement {
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
    Change your password
</h1>

    </div>

    <ul class="m-right">
 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Current password</p>
         <input type="password">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">New password</p>
         <input type="password">
         </div>
 </li>

 <li class="bold">
     <div class="text-container">
         <p class="bold-p">Repeat password</p>
         <input type="password">
         </div>
 </li>

</ul>
<button class="save-btn" id="save">Save changes</button>
    </div>
    </div>
      `;
  
      }
    }
  
  }
  
  customElements.define("password-form", Password);
  export default Password;