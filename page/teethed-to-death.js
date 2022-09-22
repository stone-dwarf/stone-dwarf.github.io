import { CreatureStatBlock, DynamicText, PartySizeSlider } from "/js/adventure.js"

const party = new PartySizeSlider('party-size-selector')
const donyaLoot = new DynamicText(party, 'donya-loot', (size) => {
  return (size * 5) + ' gp'
})

const oleg = new CreatureStatBlock(party, 'oleg')
oleg.setQuantityFunction(function (size) { return 1 })
oleg.setName('Oleg')
oleg.setDescriptor('medium humanoid (human), neutral good')
oleg.setRanks(4)
oleg.setHitPoints([
  { base: 5, sides: 4 },
  { base: 10, sides: 4 },
  { base: 18, sides: 4 },
  { base: 30, sides: 4 }])
oleg.setArmorClass([
  { ac: 10, type: null },
  { ac: 11, type: null },
  { ac: 11, type: null },
  { ac: 12, type: null }])
oleg.setSpeed([
  { sp: 30, type: null },
  { sp: 30, type: null },
  { sp: 30, type: null },
  { sp: 30, type: null }])
oleg.setAbilityModifiers([
  [0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 2, 0, 0, 1, 0]])
oleg.setTraits({ Languages: 'Common' })
oleg.setBehavior('Oleg will try to stop the players from hurting Kobal. He\'ll prioritize grappling players before resorting to punching if that fails or is attacked. If Kobal goes unconcious, Oleg will stop fighting and try to aid his son.')
oleg.setActions([
  {
    rank: 0,
    name: 'Grapple',
    desc: 'Attempts to <em>grapple</em> any player that attacks Kobal.'
  },
  {
    rank: 0,
    name: 'Jab',
    desc: '+2 to hit. 1d4 bludgeoning damage.'
  },
  {
    rank: 3,
    name: 'Cross',
    desc: '+3 to hit. 1d6 bludgeoning damage.'
  }])
oleg.setBonusActions([
  {
    rank: 2,
    name: 'Uppercut',
    desc: '+2 to hit. 1d4 points of bludgeoning damage.'
  }])
oleg.setReactions([
  {
    rank: 1,
    name: 'Left Hook',
    desc: '+2 to hit. 1d4 points of bludgeoning damage.'
  }])
oleg.refresh()

const kobal = new CreatureStatBlock(party, 'kobal')
kobal.setQuantityFunction(function (size) { return 1 })
kobal.setName('Kobal')
kobal.setDescriptor('medium humanoid (Strigoi), neutral evil')
kobal.setRanks(3)
kobal.setHitPoints([
  { base: 3, sides: 4 },
  { base: 6, sides: 4 },
  { base: 10, sides: 4 }])
kobal.setArmorClass([
  { ac: 8, type: null },
  { ac: 9, type: null },
  { ac: 10, type: null }])
kobal.setSpeed([
  { sp: 30, type: null },
  { sp: 30, type: null },
  { sp: 30, type: null }])
kobal.setAbilityModifiers([
  [0, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0],
  [1, 2, 0, 0, 0, 0]])
kobal.setTraits({ Languages: 'Common' })
kobal.setBehavior('Kobal will always avoid attacking his father. No verbal persuasion will stop him from attacking.')
kobal.setPassives([
  {
    rank: 0,
    name: 'Agile',
    desc: 'Lose no speed standing from prone.'
  }])
kobal.setActions([
  {
    rank: 0,
    name: 'Bite',
    desc: '+2 to hit. 1d4 piercing damage. (still unfanged)'
  }])
kobal.setBonusActions([
  {
    rank: 2,
    name: 'Tackle',
    desc: 'Attempt to tackle the target to the ground (supine). +1 to Strength contested with targets Strength or Dexterity.'
  }])
kobal.setReactions([
  {
    rank: 1,
    name: 'Dodge',
    desc: 'the next incoming attack has disadvantage if you can see the attacker.'
  }])
kobal.refresh()