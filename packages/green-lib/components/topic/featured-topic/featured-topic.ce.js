if (!customElements.get('featured-topic')) {
  class FeaturedTopic extends HTMLElement { }
  customElements.define('featured-topic', FeaturedTopic)
}
