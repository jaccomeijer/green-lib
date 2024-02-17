if (!customElements.get('headline-topic')) {
  class HeadlineTopic extends HTMLElement { }
  customElements.define('headline-topic', HeadlineTopic)
}
