if (!customElements.get('legal-navigation')) {
  class LegalNavigation extends HTMLElement { }
  customElements.define('legal-navigation', LegalNavigation)
}
