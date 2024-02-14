if (!customElements.get('header-navigation')) {
  class HeaderNavigation extends HTMLElement {

    hideMenu = () => {
      this.modalMenu.style.visibility = 'hidden'
      this.popupMenu.style.visibility = 'hidden'
      this.popupMenu.style.transform = 'scale(0.8)'

    }
    showMenu = () => {
      this.modalMenu.style.visibility = 'visible'
      this.popupMenu.style.visibility = 'visible'
      this.popupMenu.style.transform = 'scale(1)'
    }

    // constructor() {
    //   super()
    // }

    async connectedCallback() {
      const sr = this.shadowRoot

      this.menuButton = sr.querySelector('#menu-button')
      this.closeButton = sr.querySelector('#close-button')
      this.modalMenu = sr.querySelector('#modal-menu')
      this.popupMenu = sr.querySelector('#modal-menu>nav')
      this.modal = sr.querySelector('#modal')
      this.menuButton.onclick = () => {
        this.showMenu()
      }
      this.modal.onclick = () => {
        this.hideMenu()
      }
      this.closeButton.onclick = () => {
        this.hideMenu()
      }
    }
  }
  customElements.define('header-navigation', HeaderNavigation)
}
