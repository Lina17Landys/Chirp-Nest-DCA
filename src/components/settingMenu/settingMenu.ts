class settingMenu extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
      }

      render(){
        this.shadowRoot!.innerHTML = `
        <link rel="stylesheet" href="setting.css">
        
        `
      }
}
customElements.define("setting-menu", settingMenu);
export default settingMenu