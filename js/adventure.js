import $ from '/js/jquery.js'

class CreatureStatBlock {
  #template = `
  <h5 class="creature-quantity"></h5>
  <h3 class="creature-name"></h3>
  <div class="creature-descriptor"></div>
  <div class="rank-frame">
    <span class="rank-header">Rank</span>
    <span class="rank-value"></span>
    <input type="range" class="creature-rank u-full-width">
  </div>
  <div class="major-stat-headers row">
    <div class="four columns maj-stat-hdr">HP</div>
    <div class="four columns maj-stat-hdr">AC</div>
    <div class="four columns maj-stat-hdr">SP</div>
  </div>
  <div class="major-stats row">
    <div class="four columns maj-stat hit-point-text"></div>
    <div class="four columns maj-stat armor-class-text"></div>
    <div class="four columns maj-stat speed-text"></div>
  </div>
  <table class="modifiers u-full-width">
    <thead>
      <tr>
        <th class="ability-header">STR</th>
        <th class="ability-header">DEX</th>
        <th class="ability-header">CON</th>
        <th class="ability-header">INT</th>
        <th class="ability-header">WIS</th>
        <th class="ability-header">CHA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="str-mod ability-mod"></td>
        <td class="dex-mod ability-mod"></td>
        <td class="con-mod ability-mod"></td>
        <td class="int-mod ability-mod"></td>
        <td class="wis-mod ability-mod"></td>
        <td class="cha-mod ability-mod"></td>
      </tr>
    </tbody>
  </table>
  <div class="traits-header">Traits</div>
  <div class="traits"></div>
  <div class="behavior"></div>
  <div class="passives-header">Passives</div>
  <div class="passives"></div>
  <div class="actions-header">Actions</div>
  <div class="actions"></div>
  <div class="bonus-actions-header">Bonus Actions</div>
  <div class="bonus-actions"></div>
  <div class="reactions-header">Reactions</div>
  <div class="reactions"></div>
  `

  /**
   * creates a creature stat block
   * @param {PartySizeSlider} partyCls party size object
   * @param {String} frameId id of parent dom to append content to
   */
  constructor (partyCls, frameId) {
    const self = this
    this.party = partyCls
    this.frame = $('#' + frameId)
    this.rank = 0 // default
    this.genQuantity = (s) => { return 0 } // default

    $(this.frame).html(this.#template)

    this.party.subscribe(this, this.onNewPartySize)

    $(this.frame).find('.creature-rank')[0].oninput = function () {
      self.onNewRank(this.value)
    }
  }

  setAbilityModifiers (abilityModList) {
    this.abilityModList = abilityModList
  }

  setActions (actions) {
    const frame = $(this.frame).find('.actions')[0]
    $(frame).empty()

    actions.forEach((a) => {
      const aStr = `<div class="action" rank="${a.rank}"><span class="action-name">${a.name}</span>${a.desc}</div>`
      $(frame).append(aStr)
    })
  }

  setArmorClass (acList) {
    this.acList = acList
  }

  setBehavior (behavior) {
    $(this.frame).find('.behavior').html(behavior)
  }

  setBonusActions (bonusActions) {
    const frame = $(this.frame).find('.bonus-actions')[0]
    $(frame).empty()

    bonusActions.forEach((b) => {
      const bStr = `<div class="bonus-action" rank="${b.rank}"><span class="bonus-action-name">${b.name}</span>${b.desc}</div>`
      $(frame).append(bStr)
    })
  }

  setDescriptor (text) {
    $(this.frame).find('.creature-descriptor').text(text)
  }

  setHitPoints (hpList) {
    this.hpList = hpList
  }

  setName (text) {
    $(this.frame).find('.creature-name').text(text)
  }

  setPassives (passives) {
    const frame = $(this.frame).find('.passives')[0]
    $(frame).empty()

    passives.forEach((p) => {
      const pStr = `<div class="passive" rank="${p.rank}"><span class="passive-name">${p.name}</span>${p.desc}</div>`
      $(frame).append(pStr)
    })
  }

  setQuantityFunction (func) {
    this.genQuantity = func
  }

  setRanks (numOfRanks) {
    this.min = 0
    this.max = numOfRanks - 1
    this.rank = this.min

    $(this.frame).find('.creature-rank').attr({
      min: this.min,
      max: this.max,
      value: this.rank
    })
  }

  setReactions (reactions) {
    const frame = $(this.frame).find('.reactions')[0]
    $(frame).empty()

    reactions.forEach((r) => {
      const rStr = `<div class="reaction" rank="${r.rank}"><span class="reaction-name">${r.name}</span>${r.desc}</div>`
      $(frame).append(rStr)
    })
  }

  setSpeed (spList) {
    this.spList = spList
  }

  setTraits (traits) {
    const frame = $(this.frame).find('.traits')[0]
    $(frame).empty()

    for (const t in traits) {
      const tStr = `<span class="trait-name">${t}</span>${traits[t]}`
      $(frame).append(tStr)
    }
  }

  refresh () {
    this.onNewPartySize()
    this.onNewRank()
  }

  onNewPartySize (size = null) {
    size ??= this.party.size
    const qty = this.genQuantity(size)
    $(this.frame).find('.creature-quantity').html(qty + 'x')
    this.updateHitPoints()
  }

  onNewRank (rank = null) {
    this.rank = rank ?? this.rank
    this.updateAbilityModifiers()
    this.updateArmorClass()
    this.updateHitPoints()
    this.updateRankDisplay()
    this.updateSpeed()
    this.filterActionAbilities()
  }

  updateAbilityModifiers () {
    const modOrder = ['str-mod', 'dex-mod', 'con-mod', 'int-mod', 'wis-mod', 'cha-mod']
    const modList = this.abilityModList[this.rank]
    for (let i = 0; i < modOrder.length; ++i) {
      let mod = modList[i]
      if (mod > 0) {
        mod = `+${mod}`
      }
      $(this.frame).find('.' + modOrder[i]).html(mod)
    }
  }

  updateArmorClass () {
    const acValue = this.acList[this.rank].ac
    const acType = this.acList[this.rank].type
    let acStr = null

    if (acType === null) {
      acStr = `<span class="major-stats-big">${acValue}</span>`
    } else {
      acStr = `<span class="major-stats-big">${acValue}</span><br>(${acType})`
    }

    $(this.frame).find('.armor-class-text').html(acStr)
  }

  updateHitPoints () {
    if (this.hpList === undefined) { return }
    const hp = this.hpList[this.rank]
    const avg = hp.base + ((hp.sides / 2) * this.party.size)
    $(this.frame).find('.hit-point-text').html(`
      <span class="major-stats-big">${avg}</span>
      <br>
      (${this.party.size}d${hp.sides} + ${hp.base})`)
  }

  updateRankDisplay() {
    $(this.frame).find('.rank-value').html(parseInt(this.rank) + 1)
  }

  updateSpeed () {
    const speed = this.spList[this.rank].sp
    const spType = this.spList[this.rank].type
    let spStr = null

    if (spType === null) {
      spStr = `<span class="major-stats-big">${speed}</span>`
    } else {
      spStr = `<span class="major-stats-big">${speed}</span><br>(${spType})`
    }
    $(this.frame).find('.speed-text').html(spStr)
  }

  filterActionAbilities () {
    let active = 0

    // passive abilities
    active = 0
    const pHead = $(this.frame).find('.passives-header')
    const pList = $(this.frame).find('.passive')
    if (pList.length > 0) {
      $(pList).each((i, passive) => {
        if (parseInt($(passive).attr('rank')) <= this.rank) {
          $(passive).show()
          active++
        } else {
          $(passive).hide()
        }
      })
    }
    active > 0 ? $(pHead).show() : $(pHead).hide()

    // action abilities
    active = 0
    const aHead = $(this.frame).find('.actions-header')
    const aList = $(this.frame).find('.action')
    if (aList.length > 0) {
      $(aList).each((i, action) => {
        if (parseInt($(action).attr('rank')) <= this.rank) {
          $(action).show()
          active++
        } else {
          $(action).hide()
        }
      })
    }
    active > 0 ? $(aHead).show() : $(aHead).hide()

    // bonus action abilities
    active = 0
    const bHead = $(this.frame).find('.bonus-actions-header')
    const bList = $(this.frame).find('.bonus-action')
    if (bList.length > 0) {
      $(bList).each((i, bonusAction) => {
        if (parseInt($(bonusAction).attr('rank')) <= this.rank) {
          $(bonusAction).show()
          active++
        } else {
          $(bonusAction).hide()
        }
      })
    }
    active > 0 ? $(bHead).show() : $(bHead).hide()

    // reaction abilities
    active = 0
    const rHead = $(this.frame).find('.reactions-header')
    const rList = $(this.frame).find('.reaction')
    if (rList.length > 0) {
      $(rList).each((i, reaction) => {
        if (parseInt($(reaction).attr('rank')) <= this.rank) {
          $(reaction).show()
          active++
        } else {
          $(reaction).hide()
        }
      })
    }
    active > 0 ? $(rHead).show() : $(rHead).hide()
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

export { CreatureStatBlock, DynamicText, PartySizeSlider }
