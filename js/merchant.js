const ItemFilter = {
  NONE: '',
  ADVENTURE_GEAR: 'adventure gear',
  ARMOR: 'armor',
  WEAPON: 'weapon'
}

class ItemCompendium {
  static Filter = {
    NONE: '',
    HEAVY_ARMOR: 'Heavy Armor',
    LIGHT_ARMOR: 'Light Armor',
    MARTIAL_MELEE_WEAPON: 'Martial Melee Weapon',
    MARTIAL_RANGED_WEAPON: 'Martial Ranged Weapon',
    MEDIUM_ARMOR: 'Medium Armor',
    SHIELD: 'Shield',
    SIMPLE_MELEE_WEAPON: 'Simple Melee Weapon',
    SIMPLE_RANGED_WEAPON: 'Simple Ranged Weapon'
  }

  static #compendium = [
    /*************/
    /*** ARMOR ***/
    /*************/
    {
      name: 'Breastplate',
      type: ItemCompendium.Filter.MEDIUM_ARMOR,
      cost: '400 gp',
      ac: '14 + Dex Modifier (max 2)',
      strength: null,
      stealth: null,
      weight: '20 lb.',
      magical: false
    },
    {
      name: 'Chain Mail',
      type: ItemCompendium.Filter.HEAVY_ARMOR,
      cost: '75 gp',
      ac: '16',
      strength: 'Str 13',
      stealth: 'Disadvantage',
      weight: '55 lb.',
      magical: false
    },
    {
      name: 'Chain Shirt',
      type: ItemCompendium.Filter.MEDIUM_ARMOR,
      cost: '50 gp',
      ac: '13 + Dex Modifier (max 2)',
      strength: null,
      stealth: null,
      weight: '20 lb.',
      magical: false
    },
    {
      name: 'Half Plate',
      type: ItemCompendium.Filter.MEDIUM_ARMOR,
      cost: '750 gp',
      ac: '15 + Dex Modifier (max 2)',
      strength: null,
      stealth: 'Disadvantage',
      weight: ' 40 lb.',
      magical: false
    },
    {
      name: 'Hide',
      type: ItemCompendium.Filter.MEDIUM_ARMOR,
      cost: '10 gp',
      ac: '12 + Dex Modifier (max 2)',
      strength: null,
      stealth: null,
      weight: '12 lb.',
      magical: false
    },
    {
      name: 'Leather',
      type: ItemCompendium.Filter.LIGHT_ARMOR,
      cost: '10 gp',
      ac: '11 + Dex Modifier',
      strength: null,
      stealth: null,
      weight: '10 lb.',
      magical: false
    },
    {
      name: 'Padded',
      type: ItemCompendium.Filter.LIGHT_ARMOR,
      cost: '5 gp',
      ac: '11 + Dex Modifier',
      strength: null,
      stealth: 'Disadvantage',
      weight: '8 lb.',
      magical: false
    },
    {
      name: 'Plate',
      type: ItemCompendium.Filter.HEAVY_ARMOR,
      cost: '1500 gp',
      ac: '18',
      strength: 'Str 15',
      stealth: 'Disadvantage',
      weight: '65 lb.',
      magical: false
    },
    {
      name: 'Ring Mail',
      type: ItemCompendium.Filter.HEAVY_ARMOR,
      cost: '30 gp',
      ac: '14',
      strength: null,
      stealth: 'Disadvantage',
      weight: '40 lb.',
      magical: false
    },
    {
      name: 'Scale Mail',
      type: ItemCompendium.Filter.MEDIUM_ARMOR,
      cost: '50 gp',
      ac: '14 + Dex Modifier (max 2)',
      strength: null,
      stealth: 'Disadvantage',
      weight: '45 lb.',
      magical: false
    },
    {
      name: 'Shield',
      type: ItemCompendium.Filter.SHIELD,
      cost: '10 gp',
      ac: '+2',
      strength: null,
      stealth: null,
      weight: '6 lb.',
      magical: false
    },
    {
      name: 'Splint',
      type: ItemCompendium.Filter.HEAVY_ARMOR,
      cost: '200 gp',
      ac: '17',
      strength: 'Str 15',
      stealth: 'Disadvantage',
      weight: '60 lb.',
      magical: false
    },
    {
      name: 'Studded Leather',
      type: ItemCompendium.Filter.LIGHT_ARMOR,
      cost: '45 gp',
      ac: '12 + Dex Modifier',
      strength: null,
      stealth: null,
      weight: '13 lb.',
      magical: false
    },
    /***************/
    /*** WEAPONS ***/
    /***************/

  ]
}

