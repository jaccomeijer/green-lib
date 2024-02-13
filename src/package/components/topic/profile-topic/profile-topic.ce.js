if (!customElements.get('profile-topic')) {
  class ProfileTopic extends HTMLElement { }
  customElements.define('profile-topic', ProfileTopic)
}
