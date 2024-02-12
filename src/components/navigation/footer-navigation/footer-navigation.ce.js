if (!customElements.get('header-navigation')) {
  class FooterNavigation extends HTMLElement { }
  customElements.define('header-navigation', FooterNavigation)
}
