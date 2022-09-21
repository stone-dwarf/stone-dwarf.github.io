import { DynamicText, PartySizeSlider } from "/js/adventure.js"

const party = new PartySizeSlider('party-size-selector')
const donyaLoot = new DynamicText(party, 'donya-loot', (size) => { return size * 5 })