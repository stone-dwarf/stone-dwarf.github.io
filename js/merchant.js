const ItemFilter = {
  NONE: '',
  ADVENTURE_GEAR: 'adventure gear',
  ARMOR: 'armor',
  WEAPON: 'weapon'
}

class ItemCompendium {
  static Filter = {
    NONE: '',
    ADVENTURE_GEAR: 'Adventure Gear',
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
    /************************/
    /*** ADVENTURING GEAR ***/
    /************************/
    {
      name: 'Abacus',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '2 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Acid (Vial)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '1 lb.',
      description: `As an action, you can splash the contents of
      this vial onto a creature within 5 feet of you or throw
      the vial up to 20 feet, shattering it on impact. In either
      case, make a ranged attack against a creature or object,
      treating the acid as an improvised weapon. On a hit, the
      target takes 2d6 acid damage.`,
      magical: false
    },
    {
      name: 'Alchemist\'s Fire (Flask)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '50 gp',
      weight: '1 lb.',
      description: `This sticky, adhesive fluid ignites
      when exposed to air. As an action, you can throw this
      flask up to 20 feet, shattering it on impact. Make a
      ranged attack against a creature or object, treating
      the alchemist's fire as an improvised weapon. On a
      hit, the target takes 1d4 fire damage at the start of
      each of its turns. A creature can end this damage by
      using its action to make a DC 10 Dexterity check to
      extinguish the flames.`,
      magical: false
    },
    {
      name: 'Arrows (20) (Ammunition)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Blowgun Needles (50) (Ammunition)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Crossbow Bolts (20) (Ammunition)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1.5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Sling Bullets (20) (Ammunition)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '4 cp',
      weight: '1.5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Antitoxin (Vial)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '50 gp',
      weight: null,
      description: `A creature that drinks this vial of liquid
      gains advantage on saving throws against poison for 1
      hour. It confers no benefit to undead or constructs.`,
      magical: false
    },
    {
      name: 'Crystal (Arcane Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '1 lb.',
      description: `An arcane focus is a special item
      designed to channel the power of arcane spells. A
      sorcerer, warlock, or wizard can use such an item as a
      spellcasting focus, as described in chapter 10.`,
      magical: false
    },
    {
      name: 'Orb (Arcane Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '20 gp',
      weight: '3 lb.',
      description: `An arcane focus is a special item
      designed to channel the power of arcane spells. A
      sorcerer, warlock, or wizard can use such an item as a
      spellcasting focus, as described in chapter 10.`,
      magical: false
    },
    {
      name: 'Rod (Arcane Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '2 lb.',
      description: `An arcane focus is a special item
      designed to channel the power of arcane spells. A
      sorcerer, warlock, or wizard can use such an item as a
      spellcasting focus, as described in chapter 10.`,
      magical: false
    },
    {
      name: 'Staff (Arcane Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '4 lb.',
      description: `An arcane focus is a special item
      designed to channel the power of arcane spells. A
      sorcerer, warlock, or wizard can use such an item as a
      spellcasting focus, as described in chapter 10.`,
      magical: false
    },
    {
      name: 'Wand (Arcane Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '1 lb.',
      description: `An arcane focus is a special item
      designed to channel the power of arcane spells. A
      sorcerer, warlock, or wizard can use such an item as a
      spellcasting focus, as described in chapter 10.`,
      magical: false
    },
    {
      name: 'Backpack',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Ball Bearings (Bag of 1000)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '2 lb.',
      description: `As an action, you can spill these tiny
      metal balls from their pouch to cover a level area 10
      feet square. A creature moving across the covered area
      must succeed on a DC 10 Dexterity saving throw or fall
      prone. A creature moving through the area at half speed
      doesn't need to make the saving throw.`,
      magical: false
    },
    {
      name: 'Barrel',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '70 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Basket',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '4 sp',
      weight: '2 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Bedroll',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '7 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Bell',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Blanket',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '3 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Block and Tackle',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 sp',
      weight: '5 lb.',
      description: `A set of pulleys with a cable
      threaded through them and a hook to attach to objects, a
      block and tackle allows you to hoist up to four times the
      weight you can normally lift.`,
      magical: false
    },
    {
      name: 'Book',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '5 lb.',
      description: `A book might contain poetry, historical
      accounts, information pertaining to a particular field
      of lore, diagrams and notes on gnomish contraptions,
      or just about anything else that can be represented
      using text or pictures.`,
      magical: false
    },
    {
      name: 'Bottle (Glass)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '2 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Caltrops (20)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '2 lb.',
      description: `As an action, you can spread a single bag
      of caltrops to cover a 5-foot-square area. Any creature
      that enters the area must succeed on a DC 15 Dexterity
      saving throw or stop moving and take 1 piercing
      damage. Until the creature regains at least 1 hit point,
      its walking speed is reduced by 10 feet. A creature
      moving through the area at half speed doesn't need to
      make the saving throw.`,
      magical: false
    },
    {
      name: 'Candle',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 cp',
      weight: null,
      description: `For 1 hour, a candle sheds bright light in a
      5-foot radius and dim light for an additional 5 feet.`,
      magical: false
    },
    {
      name: 'Case (Crossbow Bolt)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1 lb.',
      description: `This wooden case can hold up
      to twenty crossbow bolts.`,
      magical: false
    },
    {
      name: 'Case (Map or Scroll)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1 lb.',
      description: `This cylindrical leather case can
      hold up to ten rolled-up sheets of paper or five rolled-up
      sheets of parchment.`,
      magical: false
    },
    {
      name: 'Chain (10 feet)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '10 lb.',
      description: `A chain has 10 hit points. It can be burst with a
      successful DC 20 Strength check.`,
      magical: false
    },
    {
      name: 'Chalk (1 Piece)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 cp',
      weight: null,
      description: ``,
      magical: false
    },
    {
      name: 'Chest',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '25 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Climber\'s Kit',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '12 lb.',
      description: `A c limber's kit includes special pitons,
      boot tips, gloves, and a harness. You can use the
      climber's kit as an action to anchor yourself; when you
      do, you can't fall more than 25 feet from the point where
      you anchored yourself, and you can't climb more than 25
      feet away from that point without undoing the anchor.`,
      magical: false
    },
    {
      name: 'Clothes (Common)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '3 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Clothes (Costume)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Clothes (Fine)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '15 gp',
      weight: '6 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Clothes (Traveler\'s)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Component Pouch',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '2 lb.',
      description: `A component pouch is a small,
      watertight leather belt pouch that has compartments
      to hold all the material components and other special
      items you need to cast your spells, except for those
      components that have a specific cost (as indicated in a
      spell's description).`,
      magical: false
    },
    {
      name: 'Crowbar',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '5 lb.',
      description: `Using a crowbar grants advantage
      to Strength checks where the crowbar's leverage
      can be applied.`,
      magical: false
    },
    {
      name: 'Sprig of Mistletoe (Druidic Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: null,
      description: `A druid can use such an
      object as a spellcasting focus.`,
      magical: false
    },
    {
      name: 'Totem (Druidic Focus)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: null,
      description: `A druid can use such an
      object as a spellcasting focus.`,
      magical: false
    },
    {
      name: 'Wooden Staff',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '4 lb.',
      description: `A druid can use such an
      object as a spellcasting focus.`,
      magical: false
    },
    {
      name: 'Yew Wand',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '1 lb.',
      description: `A druid can use such an
      object as a spellcasting focus.`,
      magical: false
    },
    {
      name: 'Fishing Tackle',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '4 lb.',
      description: `This kit includes a wooden rod, silken
      line, corkwood bobbers, steel hooks, lead sinkers, velvet
      lures, and narrow netting.`,
      magical: false
    },
    {
      name: 'Flask or Tankard',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 cp',
      weight: '1 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Grappling Hook',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Hammer',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '3 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Hammer (Sledge)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '10 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Healer\'s Kit',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '3 lb.',
      description: `This kit is a leather pouch containing
      bandages, salves, and splints. The kit has ten uses. As
      an action, you can expend one use of the kit to stabilize
      a creature that has 0 hit points, without needing to make
      a Wisdom (Medicine) check.`,
      magical: false
    },
    {
      name: 'Amulet (Holy Symbol)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '1 lb.',
      description: `A holy symbol is a representation of
      a god or pantheon. Appendix B lists the symbols commonly
      associated with many gods in the multiverse. A cleric or
      paladin can use a holy symbol as a spellcasting focus.
      To use the symbol in this way, the caster must hold it
      in hand, wear it visibly, or bear it on a shield.`,
      magical: false
    },
    {
      name: 'Emblem (Holy Symbol)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: null,
      description: `A holy symbol is a representation of
      a god or pantheon. Appendix B lists the symbols commonly
      associated with many gods in the multiverse. A cleric or
      paladin can use a holy symbol as a spellcasting focus.
      To use the symbol in this way, the caster must hold it
      in hand, wear it visibly, or bear it on a shield.`,
      magical: false
    },
    {
      name: 'Reliquary (Holy Symbol)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '2 lb.',
      description: `A holy symbol is a representation of
      a god or pantheon. Appendix B lists the symbols commonly
      associated with many gods in the multiverse. A cleric or
      paladin can use a holy symbol as a spellcasting focus.
      To use the symbol in this way, the caster must hold it
      in hand, wear it visibly, or bear it on a shield.`,
      magical: false
    },
    {
      name: 'Holy Water (Flask)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '1 lb.',
      description: `As an action, you can splash the contents
      of this flask onto a creature within 5 feet of you or throw
      it up to 20 feet, shattering it on impact. In either case,
      make a ranged attack against a target creature, treating
      the holy water as an improvised weapon. If the target is
      a fiend or undead, it takes 2d6 radiant damage.`,
      magical: false
    },
    {
      name: 'Hourglass',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '25 gp',
      weight: '1 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Hunting Trap',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '25 lb.',
      description: `When you use your action to set it,
      this trap forms a saw-toothed steel ring that snaps shut
      when a creature steps on a pressure plate in the center.
      The trap is affixed by a heavy chain to an immobile
      object, such as a tree or a spike driven into the ground.
      A creature that steps on the plate must succeed on a DC
      13 Dexterity saving throw or take 1d4 piercing damage
      and stop moving. Thereafter, until the creature breaks
      free of the trap, its movement is limited by the length
      of the chain (typically 3 feet long). A creature can use
      its action to make a DC 13 Strength check, freeing
      itself or another creature within its reach on a success.
      Each failed check deals 1 piercing damage to the
      trapped creature.`,
      magical: false
    },
    {
      name: 'Ink (1 ounce bottle)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Ink Pen',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 cp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Jug or Pitcher',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 cp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Ladder (10 foot)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 sp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Lamp',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '1 lb.',
      description: `A lamp casts bright light in a 15-foot radius
      and dim light for an additional 30 feet. Once lit, it burns
      for 6 hours on a flask (1 pint) of oil.`,
      magical: false
    },
    {
      name: 'Lantern (Bullseye)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '2 lb.',
      description: `A bullseye lantern casts bright
      light in a 60-foot cone and dim light for an additional 60
      feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.`,
      magical: false
    },
    {
      name: 'Lantern (Hooded)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '2 lb.',
      description: `A hooded lantern casts bright light
      in a 30-foot radius and dim light for an additional 30
      feet. Once lit, it burns for 6 hours on a flask (1 pint) of
      oil. As an action, you can lower the hood, reducing the
      light to dim light in a 5-foot radius.`,
      magical: false
    },
    {
      name: 'Lock',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '1 lb.',
      description: `A key is provided with the lock. Without the
      key, a creature proficient with thieves' tools can pick
      this lock with a successful DC 15 Dexterity check.
      Your DM may decide that better locks are available
      for higher prices.`,
      magical: false
    },
    {
      name: 'Magnifying Glass',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '100 gp',
      weight: null,
      description: `This lens allows a closer look at
      small objects. It is also useful as a substitute for flint
      and steel when starting fires. Lighting a fire with a
      magnifying glass requires light as bright as sunlight to
      focus, tinder to ignite, and about 5 minutes for the fire
      to ignite. A magnifying glass grants advantage on any
      ability check made to appraise or inspect an item that is
      small or highly detailed.`,
      magical: false
    },
    {
      name: 'Manacles',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '6 lb.',
      description: `These metal restraints can bind a Small
      or Medium creature. Escaping the manacles requires
      a successful DC 20 Dexterity check. Breaking them
      requires a successful DC 20 Strength check. Each
      set of manacles comes with one key. Without the key,
      a creature proficient with thieves' tools can pick the
      manacles lock with a successful DC 15 Dexterity
      check. Manacles have 15 hit points.`,
      magical: false
    },
    {
      name: 'Mess Kit',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 sp',
      weight: '1 lb.',
      description: `This tin box contains a cup and simple
      cutlery. The box clamps together, and one side can
      be used as a cooking pan and the other as a plate or
      shallow bowl.`,
      magical: false
    },
    {
      name: 'Mirror (Steel)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '0.5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Oil (Flask)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 sp',
      weight: '1 lb.',
      description: `Oil usually comes in a clay flask that holds 1
      pint. As an action, you can splash the oil in this flask
      onto a creature within 5 feet of you or throw it up to
      20 feet, shattering it on impact. Make a ranged attack
      against a target creature or object, treating the oil as
      an improvised weapon. On a hit, the target is covered
      in oil. If the target takes any fire damage before the oil
      dries (after 1 minute), the target takes an additional 5
      fire damage from the burning oil. You can also pour a
      flask of oil on the ground to cover a 5-foot-square area,
      provided that the surface is level. If lit, the oil burns for
      2 rounds and deals 5 fire damage to any creature that
      enters the area or ends its turn in the area. A creature
      can take this damage only once per turn.`,
      magical: false
    },
    {
      name: 'Paper (One Sheet)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 sp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Parchment (One Sheet)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 sp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Perfume (Vial)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Pick (Miner\'s)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '10 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Piton',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 cp',
      weight: '0.25 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Poison (Basic) (Vial)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '100 gp',
      weight: null,
      description: `You can use the poison in this vial
      to coat one slashing or piercing weapon or up to three
      pieces of ammunition. Applying the poison takes
      an action. A creature hit by the poisoned weapon or
      ammunition must make a DC 10 Constitution saving
      throw or take 1d4 poison damage. Once applied, the
      poison retains potency for 1 minute before drying.`,
      magical: false
    },
    {
      name: 'Pole (10-foot)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 cp',
      weight: '7 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Pot (Iron)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '10 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Potion of Healing',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '50 gp',
      weight: '0.5 lb.',
      description: `A character who drinks the magical
      red fluid in this vial regains 2d4 + 2 hit points. Drinking
      or administering a potion takes an action.`,
      magical: false
    },
    {
      name: 'Pouch',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '1 lb.',
      description: `A cloth or leather pouch can hold up to 20
      sling bullets or 50 blowgun needles, among other
      things. A compartmentalized pouch for holding spell
      components is called a component pouch (described
      earlier in this section).`,
      magical: false
    },
    {
      name: 'Quiver',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '1 lb.',
      description: `A quiver can hold up to 20 arrows.`,
      magical: false
    },
    {
      name: 'Ram (Portable)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '4 gp',
      weight: '35 lb.',
      description: `You can use a portable ram to break
      down doors. When doing so, you gain a +4 bonus on the
      Strength check. One other character can help you use
      the ram, giving you advantage on this check.`,
      magical: false
    },
    {
      name: 'Ration (1 day)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '2 lb.',
      description: `Rations consist of dry foods suitable
      for extended travel, including jerky, dried fruit,
      hardtack, and nuts.`,
      magical: false
    },
    {
      name: 'Robes',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '4 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Rope (Hempen) (50 Feet)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '10 lb.',
      description: `Rope, whether made of hemp or silk, has 2 hit
      points and can be burst with a DC 17 Strength check.`,
      magical: false
    },
    {
      name: 'Rope (Silk) (50 Feet)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '10 gp',
      weight: '5 lb.',
      description: `Rope, whether made of hemp or silk, has 2 hit
      points and can be burst with a DC 17 Strength check.`,
      magical: false
    },
    {
      name: 'Sack',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 cp',
      weight: '0.5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Scale (Merchant\'s)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: '3 lb.',
      description: `A scale includes a small balance,
      pans, and a suitable assortment of weights up to 2
      pounds. With it, you can measure the exact weight of
      small objects, such as raw precious metals or trade
      goods, to help determine their worth.`,
      magical: false
    },
    {
      name: 'Sealing Wax',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Shovel',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Signal Whistle',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 cp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Signet Ring',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 gp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Soap',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 cp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Spellbook',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '50 gp',
      weight: '3 lb.',
      description: `Essential for wizards, a spellbook is
      a leather-bound tome with 100 blank vellum pages
      suitable for recording spells.`,
      magical: false
    },
    {
      name: 'Spikes (Iron) (10)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: '5 lb.',
      description: null,
      magical: false
    },
    {
      name: 'Spyglass',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1000 gp',
      weight: '1 lb.',
      description: `Objects viewed through a spyglass are
      magnified to twice their size.`,
      magical: false
    },
    {
      name: 'Tent (Two-Person)',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 gp',
      weight: '20 lb.',
      description: `A simple and portable canvas shelter, a
      tent sleeps two.`,
      magical: false
    },
    {
      name: 'Tinderbox',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '5 sp',
      weight: '1 lb.',
      description: `This small container holds flint, fire steel,
      and tinder (usually dry cloth soaked in light oil) used to
      kindle a fire. Using it to light a torch—or anything else
      with abundant, exposed fuel—takes an action. Lighting
      any other fire takes 1 minute.`,
      magical: false
    },
    {
      name: 'Torch',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 cp',
      weight: '1 lb.',
      description: `A torch burns for 1 hour, providing bright light
      in a 20-foot radius and dim light for an additional 20
      feet. If you make a melee attack with a burning torch
      and hit, it deals 1 fire damage.`,
      magical: false
    },
    {
      name: 'Vial',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 gp',
      weight: null,
      description: null,
      magical: false
    },
    {
      name: 'Waterskin',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '2 sp',
      weight: '5 lb. (full)',
      description: null,
      magical: false
    },
    {
      name: 'Whetstone',
      type: ItemCompendium.Filter.ADVENTURE_GEAR,
      cost: '1 cp',
      weight: '1 lb.',
      description: null,
      magical: false
    }
  ]
}

