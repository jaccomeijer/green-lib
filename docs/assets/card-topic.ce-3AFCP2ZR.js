if (!customElements.get('card-topic')) {
  class CardTopic extends HTMLElement { }
  customElements.define('card-topic', CardTopic)
}
