import $ from '/js/jquery.js'

class PartySizeSlider {
  // private fields
  #value

  // element ids
  static displayId = 'party-size-display'
  static sliderId = 'party-size-slider'

  // dom template
  static template = `
    <div id="${PartySizeSlider.displayId}"></div>
    <div>Party Size</div>
    <input type="range" id="${PartySizeSlider.sliderId}">`
  
  /**
   * create a slider that denotes the party size
   * @param {String} frameId id of element to append to
   * @param {Number} min smallest party size
   * @param {Number} max largest party size
   */
  constructor (frameId, min = 2, max = 8) {
    const self = this
    this.frame = $('#' + frameId)
    this.display = null // created below
    this.slider = null // created below
    this.#value = min
    this.callbacks = []

    // render template
    $(this.frame).html(PartySizeSlider.template)
    this.display = $('#' + PartySizeSlider.displayId)
    this.slider = $('#' + PartySizeSlider.sliderId)
    $(this.slider).attr({min: min, max: max, value: min})

    // oninput
    $(this.slider).on('input', function () {
      self.#onPartySizeChange(this.value)
    })
  }

  get size () {
    return this.#value
  }

  /**
   * @function onPartySizeUpdate
   * @param {this} context the 'this' property to apply to the callback
   * @param {onPartySizeUpdate(Number)} callback what will be called when party size changes
   */
  subscribe (context, callback) {
    this.callbacks.push({self: context, fn: callback})
  }

  /**
   * 
   * @param {Number} size current size from slider selection
   */
  #onPartySizeChange (size) {
    // update internal value and display
    this.#value = size
    $(this.display).html(this.size)

    // trigger callbacks to those subbed
    this.callbacks.forEach(callback => {
      callback.fn.call(callback.self, this.size)
    })
  }
}

export { PartySizeSlider }
