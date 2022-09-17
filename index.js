import $ from '/js/jquery.js'

const Filter = {
  NONE: '',
  ADVENTURE: 'adventure',
  BATTLEMAP: 'battlemap',
  DM_TOOL: 'dm_tool',
  MAP: 'map',
}
Object.freeze(Filter)

class Feed {
  /**
   * allows you to add entries and render
   * @param {String} frameId id of parent dom to add entries to.
   */
  constructor (frameId) {
    this.entries = []
    this.frame = $('#' + frameId)
  }

  /**
   * add entry to the feed
   * @param {Number} year of publication. use full year.
   * @param {Number} month of publication
   * @param {Number} day of publication
   * @param {String} title of publication
   * @param {String} link to page
   * @param {Array.<Filter>} filters are a list of filters. simple tag system.
   */
  add (year, month, day, title, link, filters) {
    // format date
    month = month.toString().padStart(2, '0')
    day = day.toString().padStart(2, '0')

    // format filters

    const filterText = filters.toString().replaceAll(',', ' | ')
    
    let entry = $(`
      <div class="entry row">
        <div class="entry-date two columns">${year}.${month}.${day}</div>
        <div class="entry-title eight columns">
          <a href="${link}">${title}</a>
        </div>
        <div class="entry-filter two columns">${filterText}</div>
      </div>
    `)

    this.entries.push(entry)
  }

  render () {
    // don't touch the original
    let entries = this.entries
    entries.reverse()

    // add entries to frame
    $(this.frame).empty()

    entries.forEach(entry => $(this.frame).append(entry))
  }
}

// MAIN
const feed = new Feed('feed')
feed.add(2022, 8, 15, 'Town Blacksmith Shop', '#', [Filter.BATTLEMAP])
feed.add(2022, 9, 5, 'Lapis Haven Regional Map', '#', [Filter.MAP])
feed.render()