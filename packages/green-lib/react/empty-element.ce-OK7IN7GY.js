if (!customElements.get('empty-element')) {
  class EmptyElement extends HTMLElement { }
  customElements.define('empty-element', EmptyElement)
}
