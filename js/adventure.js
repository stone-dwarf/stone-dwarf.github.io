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
    $(this.display).html(this.size)
    this.slider = $('#' + PartySizeSlider.sliderId)
    $(this.slider).attr({min: min, max: max, value: this.size})

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
    // call it to set initial value
    callback.call(context, this.size)
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

class DynamicText {
  /**
   * provide necessary objects to provide a dynamic value on the page
   * @function generator
   * @param {PartySizeSlider} partyCls object of current slider
   * @param {String} frameId id of parent dom to insert text
   * @param {generator(Number)} genText generate text based on provided party size
   */
  constructor (partyCls, frameId, genText) {
    this.party = partyCls
    this.frame = $('#' + frameId)
    this.text = genText

    // sub to party size changes
    this.party.subscribe(this, this.onNewPartySize)
  }

  onNewPartySize (size) {
    $(this.frame).html(this.text(size))
  }
}

export { DynamicText, PartySizeSlider }
