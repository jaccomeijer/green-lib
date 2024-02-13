if (!customElements.get('quote-topic')) {
  class QuoteTopic extends HTMLElement { }
  customElements.define('quote-topic', QuoteTopic)
}
