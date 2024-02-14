if (!customElements.get('showcase-topic')) {
  class ShowcaseTopic extends HTMLElement { }
  customElements.define('showcase-topic', ShowcaseTopic)
}
