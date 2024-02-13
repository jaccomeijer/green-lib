if (!customElements.get('block-topic')) {
  class BlockTopic extends HTMLElement { }
  customElements.define('block-topic', BlockTopic)
}
