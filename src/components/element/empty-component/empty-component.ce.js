if (!customElements.get('empty-component')) {
  class EmptyComponent extends HTMLElement { }
  customElements.define('empty-component', EmptyComponent)
}
