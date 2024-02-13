if (!customElements.get('feather-icon')) {
  class FeatherIcon extends HTMLElement { }
  customElements.define('feather-icon', FeatherIcon)
}
