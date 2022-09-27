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
    {
      name: 'Battleaxe',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '10 gp',
      damage: '1d8 Slashing',
      weight: '4 lb.',
      properties: 'Versatile (1d10)',
      magical: false
    },
    {
      name: 'Blowgun',
      type: ItemCompendium.Filter.MARTIAL_RANGED_WEAPON,
      cost: '10 gp',
      damage: '1 Piercing',
      weight: '1 lb.',
      properties: 'Ammunition (range 25/100), Loading',
      magical: false
    },
    {
      name: 'Club',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '1 sp',
      damage: '1d4 bludgeoning',
      weight: '2 lb.',
      properties: 'Light',
      magical: false
    },
    {
      name: 'Dagger',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '2 gp',
      damage: '1d4 piercing',
      weight: '1 lb.',
      properties: 'Finesse, Light, Thrown (range 20/60)',
      magical: false
    },
    {
      name: 'Dart',
      type: ItemCompendium.Filter.SIMPLE_RANGED_WEAPON,
      cost: '5 cp',
      damage: '1d4 Piercing',
      weight: '1/4 lb.',
      properties: 'Finesse, Thrown (range 20/60)',
      magical: false
    },
    {
      name: 'Flail',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '10 gp',
      damage: '1d8 Bludgeoning',
      weight: '4 lb.',
      properties: null,
      magical: false
    },
    {
      name: 'Glaive',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '20 gp',
      damage: '1d10 Slashing',
      weight: '6 lb.',
      properties: 'Heavy, Reach, Two-Handed',
      magical: false
    },
    {
      name: 'Greataxe',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '30 gp',
      damage: '1d12 Slashing',
      weight: '7 lb.',
      properties: 'Heavy, Two-Handed',
      magical: false
    },
    {
      name: 'Greatclub',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '2 sp',
      damage: '1d8 Bludgeoning',
      weight: '10 lb.',
      properties: 'Two-Handed',
      magical: false
    },
    {
      name: 'Greatsword',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '50 gp',
      damage: '2d6 Slashing',
      weight: '6 lb.',
      properties: 'Heavy, Two-Handed',
      magical: false
    },
    {
      name: 'Halberd',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '20 gp',
      damage: '1d10 Slashing',
      weight: '6 lb.',
      properties: 'Heavy, Reach, Two-Handed',
      magical: false
    },
    {
      name: 'Handaxe',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '5 gp',
      damage: '1d6 Slashing',
      weight: '2 lb.',
      properties: 'Light, Thrown (range 20/60)',
      magical: false
    },
    {
      name: 'Hand Crossbow',
      type: ItemCompendium.Filter.MARTIAL_RANGED_WEAPON,
      cost: '75 gp',
      damage: '1d6 Piercing',
      weight: '3 lb.',
      properties: 'Ammunition (range 30/120), Light, Loading',
      magical: false
    },
    {
      name: 'Heavy Crossbow',
      type: ItemCompendium.Filter.MARTIAL_RANGED_WEAPON,
      cost: '50 gp',
      damage: '1d10 Piercing',
      weight: '18 lb.',
      properties: 'Ammunition (range 100/400), Heavy, Loading, Two-Handed',
      magical: false
    },
    {
      name: 'Javelin',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '5 sp',
      damage: '1d6 Piercing',
      weight: '2 lb.',
      properties: 'Thrown (range 30/120)',
      magical: false
    },
    {
      name: 'Lance',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '10 gp',
      damage: '1d12 Piercing',
      weight: '6 lb.',
      properties: 'Reach, Special',
      magical: false
    },
    {
      name: 'Light Crossbow',
      type: ItemCompendium.Filter.SIMPLE_RANGED_WEAPON,
      cost: '25 gp',
      damage: '1d8 piercing',
      weight: '5 lb.',
      properties: 'Ammunition (range 80/320), Loading, Two-Handed',
      magical: false
    },
    {
      name: 'Light Hammer',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '2 gp',
      damage: '1d4 Bludgeoning',
      weight: '2 lb.',
      properties: 'Light, Thrown (range 20/60)',
      magical: false
    },
    {
      name: 'Longbow',
      type: ItemCompendium.Filter.MARTIAL_RANGED_WEAPON,
      cost: '50 gp',
      damage: '1d8 Piercing',
      weight: '2 lb.',
      properties: 'Ammunition (range 150/600), Heavy, Two-Handed',
      magical: false
    },
    {
      name: 'Longsword',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '15 gp',
      damage: '1d8 Slashing',
      weight: '3 lb.',
      properties: 'Versatile (1d10)',
      magical: false
    },
    {
      name: 'Mace',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '5 gp',
      damage: '1d6 Bludgeoning',
      weight: '4 lb.',
      properties: null,
      magical: false
    },
    {
      name: 'Maul',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '10 gp',
      damage: '2d6 Bludgeoning',
      weight: '10 lb.',
      properties: 'Heavy, Two-Handed',
      magical: false
    },
    {
      name: 'Morningstar',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '15 gp',
      damage: '1d8 Piercing',
      weight: '4 lb.',
      properties: null,
      magical: false
    },
    {
      name: 'Net',
      type: ItemCompendium.Filter.MARTIAL_RANGED_WEAPON,
      cost: '1 gp',
      damage: null,
      weight: '3 lb.',
      properties: 'Special, Thrown (range 5/15)',
      magical: false
    },
    {
      name: 'Pike',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '5 gp',
      damage: '1d10 Piercing',
      weight: '18 lb.',
      properties: 'Heavy, Reach, Two-Handed',
      magical: false
    },
    {
      name: 'Quarterstaff',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '2 sp',
      damage: '1d6 Bludgeoning',
      weight: '4 lb.',
      properties: 'Versatile (1d8)',
      magical: false
    },
    {
      name: 'Rapier',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '25 gp',
      damage: '1d8 Piercing',
      weight: '2 lb.',
      properties: 'Finesse',
      magical: false
    },
    {
      name: 'Scimitar',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '25 gp',
      damage: '1d6 Slashing',
      weight: '3 lb.',
      properties: 'Finesse, Light',
      magical: false
    },
    {
      name: 'Shortbow',
      type: ItemCompendium.Filter.SIMPLE_RANGED_WEAPON,
      cost: '25 gp',
      damage: '1d6 piercing',
      weight: '2 lb.',
      properties: 'Ammunition (range 80/320), Two-Handed',
      magical: false
    },
    {
      name: 'Shortsword',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '10 gp',
      damage: '1d6 Piercing',
      weight: '2 lb.',
      properties: 'Finesse, Light',
      magical: false
    },
    {
      name: 'Sickle',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '1 gp',
      damage: '1d4 Slashing',
      weight: '2 lb.',
      properties: 'Light',
      magical: false
    },
    {
      name: 'Sling',
      type: ItemCompendium.Filter.SIMPLE_RANGED_WEAPON,
      cost: '1 sp',
      damage: '1d4 Bludgeoning',
      weight: null,
      properties: 'Ammunition (range 30/120)',
      magical: false
    },
    {
      name: 'Spear',
      type: ItemCompendium.Filter.SIMPLE_MELEE_WEAPON,
      cost: '1 gp',
      damage: '1d6 Piercing',
      weight: '3 lb.',
      properties: 'Thrown (range 20/60), Versatile(1d8)',
      magical: false
    },
    {
      name: 'Trident',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '5 gp',
      damage: '1d6 Piercing',
      weight: '4 lb.',
      properties: 'Thrown (range 20/60), Versatile (1d8)',
      magical: false
    },
    {
      name: 'War Pick',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '5 gp',
      damage: '1d8 Piercing',
      weight: '2 lb.',
      properties: null,
      magical: false
    },
    {
      name: 'Warhammer',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '15 gp',
      damage: '1d8 Bludgeoning',
      weight: '2 lb.',
      properties: 'Versatile (1d10)',
      magical: false
    },
    {
      name: 'Whip',
      type: ItemCompendium.Filter.MARTIAL_MELEE_WEAPON,
      cost: '2 gp',
      damage: '1d4 Slashing',
      weight: '3 lb.',
      properties: 'Finesse, Reach',
      magical: false
    },
  ]
}

