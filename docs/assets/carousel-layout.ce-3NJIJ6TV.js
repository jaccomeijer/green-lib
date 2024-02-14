if (!customElements.get('carousel-layout')) {
  class CarouselLayout extends HTMLElement {
    #slideIndex = 0
    #reverseDirection = false

    // Count up or down and flip direction when needed
    #triggerMove() {
      if (this.#slideIndex > this.slideCount - 2) {
        this.#reverseDirection = true
      }
      if (this.#slideIndex < 1) {
        this.#reverseDirection = false
      }
      this.#slideIndex += this.#reverseDirection ? -1 : 1
      this.#scrollTo(this.#slideIndex)
    }

    // Scroll to a specific position and set active dot
    #scrollTo(pos) {
      this.slider.scrollTo({
        left: pos * this.slider.offsetWidth,
        behavior: 'smooth',
      })
      this.#setActiveDot(pos)
    }

    // Set active class on a single dot
    #setActiveDot(pos) {
      for (let i = 0; i < this.slideCount; i++) {
        const classList = this.dots.children[i].classList

        if (pos === i) {
          classList.add('active')
        } else {
          classList.remove('active')
        }
      }
    }

    // Handle scroll event - set active dot
    #handleScroll() {
      const newSlideIndex = Math.round(
        this.slider.scrollLeft / this.slider.offsetWidth,
      )

      this.#setActiveDot(newSlideIndex)
    }

    // Set a newtimer
    #setTimer() {
      clearInterval(this.timerId)
      this.timerId = setInterval(() => {
        this.#triggerMove()
      }, this.delay || 1000)
    }

    // constructor() {
    //   super()
    // }

    async connectedCallback() {
      const sr = this.shadowRoot

      // Get attribute values
      this.delay = this.getAttribute('delay')

      this.#setTimer()

      this.slider = sr.querySelector('#slider')
      this.slides = sr.querySelectorAll('#slider>*')
      this.dots = sr.querySelector('#dots')

      // Add event to slider
      this.slider.onscroll = () => {
        this.#handleScroll()
      }

      // Set number of slides
      this.slideCount = this.slides.length

      // Add a dot for each slides
      for (let i = 0; i < this.slideCount; i++) {
        const spanElement = document.createElement('span')

        spanElement.onclick = () => {
          this.#setTimer()
          this.#scrollTo(i)
        }
        this.dots.appendChild(spanElement)
      }
      this.#setActiveDot(0)
    }

    async ddisconnectedCallback() {
      clearInterval(this.timerId)
    }
  }
  customElements.define('carousel-layout', CarouselLayout)
}
