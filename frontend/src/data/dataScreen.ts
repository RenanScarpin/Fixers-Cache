export type DataScreenBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'formula'; lines: string[]; note?: string }
  | { type: 'subheading'; text: string }
  | { type: 'table'; columns: string[]; rows: string[][]; compact?: boolean }

export interface DataScreenSection {
  id: string
  group: 'core' | 'ranged' | 'melee' | 'damage'
  title: string
  sourcePage: number
  wide?: boolean
  blocks: DataScreenBlock[]
}

export interface DataScreenGroup {
  id: DataScreenSection['group']
  title: string
  eyebrow: string
  description: string
}

export const DATA_SCREEN_GROUPS: DataScreenGroup[] = [
  {
    id: 'core',
    title: 'Core Rules & Actions',
    eyebrow: 'PANEL 01',
    description: 'Checks, modifiers, actions, costs, Facedowns, and job pay.',
  },
  {
    id: 'ranged',
    title: 'Ranged Combat',
    eyebrow: 'PANEL 02',
    description: 'Initiative, movement, range DVs, fire modes, aimed shots, and weapon damage.',
  },
  {
    id: 'melee',
    title: 'Melee & Defense',
    eyebrow: 'PANEL 03',
    description: 'Melee resolution, Brawling, Martial Arts, grapples, armor, cover, and explosives.',
  },
  {
    id: 'damage',
    title: 'Damage & Injuries',
    eyebrow: 'PANEL 04',
    description: 'Wound states and the Body and Head Critical Injury tables.',
  },
]

export const DATA_SCREEN_SECTIONS: DataScreenSection[] = [
  {
    id: 'skill-resolution',
    group: 'core',
    title: 'Skill Resolution',
    sourcePage: 2,
    blocks: [
      {
        type: 'formula',
        lines: [
          "Attacker's STAT + Skill + 1d10 vs.",
          "Defender's STAT + Skill + 1d10",
          'or Task Difficulty Value (DV)',
        ],
      },
    ],
  },
  {
    id: 'difficulty-values',
    group: 'core',
    title: 'Difficulty Values (DV)',
    sourcePage: 2,
    wide: true,
    blocks: [
      {
        type: 'table',
        columns: ['Difficulty', 'Description', 'DV'],
        rows: [
          ['Simple', 'This is something most people can do without thinking.', '9'],
          ['Everyday', 'Most people can do without special training.', '13'],
          ['Difficult', 'Difficult to accomplish without training or talent.', '15'],
          ['Professional', 'This feat takes professional level training.', '17'],
          ['Heroic', 'Generally requires high level training.', '21'],
          ['Incredible', 'Only the very best can accomplish it.', '24'],
          ['Legendary', 'This is something people write stories about.', '29'],
        ],
      },
    ],
  },
  {
    id: 'critical-success-failure',
    group: 'core',
    title: 'Critical Success & Failure',
    sourcePage: 2,
    blocks: [
      { type: 'subheading', text: 'Critical Success' },
      {
        type: 'paragraph',
        text: 'If you roll a 10 on a 1d10 for a Check, roll again and add the 2nd roll to the 1st. Do not roll again if you roll another 10.',
      },
      { type: 'subheading', text: 'Critical Failure' },
      {
        type: 'paragraph',
        text: 'If you roll a 1 on a 1d10 for a Check, roll again and subtract the 2nd roll from your STAT + Skill + 1st roll. Do not roll again if you roll another 1.',
      },
    ],
  },
  {
    id: 'trying-again',
    group: 'core',
    title: 'Trying Again',
    sourcePage: 2,
    blocks: [
      {
        type: 'paragraph',
        text: "If you fail a Check, you can't try again unless your chances of success have improved for some reason.",
      },
    ],
  },
  {
    id: 'complimentary-skills',
    group: 'core',
    title: 'Complimentary Skills',
    sourcePage: 2,
    blocks: [
      {
        type: 'paragraph',
        text: 'With GM approval, a Character can make a single complimentary Skill Check to give a +1 bonus to the main Skill Check.',
      },
    ],
  },
  {
    id: 'taking-extra-time',
    group: 'core',
    title: 'Taking Extra Time',
    sourcePage: 2,
    blocks: [
      {
        type: 'paragraph',
        text: 'Get a single +1 bonus to a Skill Check by spending 4x the required time on it.',
      },
    ],
  },
  {
    id: 'using-luck',
    group: 'core',
    title: 'Using LUCK',
    sourcePage: 2,
    blocks: [
      { type: 'paragraph', text: 'Each point of LUCK spent gives +1 to a Skill Check.' },
    ],
  },
  {
    id: 'modifier-examples',
    group: 'core',
    title: 'Modifier Examples',
    sourcePage: 2,
    blocks: [
      {
        type: 'table',
        columns: ['Condition', 'Mod'],
        rows: [
          ['Poor lighting conditions', '-1'],
          ['Never done this before', '-1'],
          ['Complex task', '-2'],
          ['Missing right tools/parts', '-2'],
          ['Slept uncomfortable previous night', '-2'],
          ['Under extreme stress', '-2'],
          ['Exhausted', '-4'],
          ['Extremely drunk or sedated', '-4'],
          ['Trying to perform task secretly', '-4'],
          ['Task obscured by smoke, darkness', '-4'],
        ],
      },
    ],
  },
  {
    id: 'actions',
    group: 'core',
    title: 'Actions',
    sourcePage: 2,
    wide: true,
    blocks: [
      {
        type: 'table',
        columns: ['Action', 'Data'],
        rows: [
          ['Move Action', 'Move up to MOVE x 2 m/yd.'],
          ['Attack', 'Make a Melee or Ranged Attack.'],
          ['Choke', 'Choke a Grabbed opponent.'],
          ['Equip/Drop Shield', 'Equip or drop a Shield.'],
          ['Get into a Vehicle', 'Get into a Vehicle.'],
          ['Get Up', 'Get up after being Prone.'],
          ['Grab', 'Grab and hold an opponent or take away an object they are holding.'],
          ['Hold Action', 'Hold Action until later in the Round.'],
          ['Human Shield', 'Equip someone you Grabbed as a Human Shield.'],
          ['Reload', 'Reload a weapon with one ammo type.'],
          ['Run', 'Take an additional Move Action.'],
          ['Start a Vehicle', "Start a Vehicle. Replace your MOVE w/ Vehicle's MOVE and jump to the top of the Initiative Queue."],
          ['Stabilize', 'Stabilize a target to begin the natural healing process or end the Mortally Wounded Wound State.'],
          ['Throw', 'Throw Grabbed enemy or throw object.'],
          ['Use NET Actions', 'Perform NET Actions inside the NET.'],
          ['Use an Object', 'Manipulate an object. Drawing an easily accessible weapon into a free hand or dropping a held weapon (not a shield) onto the floor does not require this Action.'],
          ['Use a Skill', 'Use one of your Skills to accomplish a quick task. A longer task might require multiple Actions and Rounds.'],
          ['Vehicle Maneuver', 'Make a difficult vehicular Maneuver.'],
        ],
      },
    ],
  },
  {
    id: 'facedowns',
    group: 'core',
    title: 'Facedowns',
    sourcePage: 2,
    blocks: [
      {
        type: 'formula',
        lines: ['COOL + Reputation* + 1d10', 'vs. COOL + Reputation* + 1d10'],
        note: '*Treat Reputation as a negative number if defining Event is for cowardice.',
      },
      {
        type: 'paragraph',
        text: 'The loser must either back down or take -2 to all Actions vs. the winner until they have defeated them once.',
      },
    ],
  },
  {
    id: 'costs',
    group: 'core',
    title: 'Costs',
    sourcePage: 2,
    blocks: [
      {
        type: 'table',
        columns: ['Category', 'Cost'],
        rows: [
          ['Cheap', '10eb'],
          ['Everyday', '20eb'],
          ['Costly', '50eb'],
          ['Premium', '100eb'],
          ['Expensive', '500eb'],
          ['Very Expensive', '1,000eb'],
          ['Luxury', '5,000eb'],
          ['Super Luxury', '≥ 10,000eb'],
        ],
      },
    ],
  },
  {
    id: 'jobs',
    group: 'core',
    title: 'Jobs (Payment Is Per Person)',
    sourcePage: 2,
    blocks: [
      {
        type: 'table',
        columns: ['Job Type', 'Pay'],
        rows: [
          ['Easy Job (no armed resistance expected)', '500eb'],
          ['Typical Job (armed resistance expected)', '1,000eb'],
          ['Dangerous Job (overwhelming armed resistance expected)', '2,000eb'],
        ],
      },
    ],
  },
  {
    id: 'initiative',
    group: 'ranged',
    title: 'Initiative',
    sourcePage: 3,
    blocks: [
      { type: 'formula', lines: ['At start of combat: REF + 1d10'] },
      { type: 'subheading', text: 'On Your Turn' },
      { type: 'paragraph', text: 'Your Turn = 1 Move Action + 1 other Action.' },
    ],
  },
  {
    id: 'move-actions',
    group: 'ranged',
    title: 'Move Actions',
    sourcePage: 3,
    blocks: [
      {
        type: 'paragraph',
        text: 'Move a number of m/yds equal to MOVE x 2, or a number of squares (if playing on a grid) equal to MOVE, which can include moving diagonally.',
      },
      { type: 'subheading', text: 'Prone' },
      {
        type: 'paragraph',
        text: "If Prone, you can't use your Move Action until you use the Get Up Action. You can still perform other Actions.",
      },
      { type: 'subheading', text: 'Split Movement' },
      {
        type: 'paragraph',
        text: 'When using your Move Action, you can take any Action in the middle of it and keep moving afterwards.',
      },
      { type: 'subheading', text: 'Misc. Movement' },
      {
        type: 'paragraph',
        text: 'Swimming, Climbing, and Jumping (with a running start) all cost 2 m/yds of movement for every m/yd traveled or 2 squares for every 1 square (on a grid). When jumping from standing you can clear half the distance that you could with a running start.',
      },
    ],
  },
  {
    id: 'ranged-combat-resolution',
    group: 'ranged',
    title: 'Ranged Combat Resolution',
    sourcePage: 3,
    blocks: [
      {
        type: 'formula',
        lines: [
          "Attacker's REF + Relevant Weapon Skill + 1d10",
          'vs. DV Determined by Range & Weapon',
          "or Defender's DEX + Evasion Skill + 1d10*",
        ],
        note: '*A Defender with a REF 8+ can choose to attempt to dodge a Ranged Attack using the Evasion Skill.',
      },
    ],
  },
  {
    id: 'single-shot-dvs',
    group: 'ranged',
    title: 'Single Shot DVs Based on Range (in m/yds)',
    sourcePage: 3,
    wide: true,
    blocks: [
      {
        type: 'table',
        columns: ['Weapon Type', '0-6', '7-12', '13-25', '26-50', '51-100', '101-200', '201-400', '401-800'],
        rows: [
          ['Pistol', '13', '15', '20', '25', '30', '30', 'N/A', 'N/A'],
          ['SMG', '15', '13', '15', '20', '25', '25', '30', 'N/A'],
          ['Shotgun (Slug)', '13', '15', '20', '25', '30', '35', 'N/A', 'N/A'],
          ['Assault Rifle', '17', '16', '15', '13', '15', '20', '25', '30'],
          ['Sniper Rifle', '30', '25', '25', '20', '15', '16', '17', '20'],
          ['Bows & Crossbow', '15', '13', '15', '17', '20', '22', 'N/A', 'N/A'],
          ['Grenade Launcher', '16', '15', '15', '17', '20', '22', '25', 'N/A'],
          ['Rocket Launcher', '17', '16', '15', '15', '20', '20', '25', '30'],
        ],
      },
    ],
  },
  {
    id: 'fire-modes',
    group: 'ranged',
    title: 'Fire Modes',
    sourcePage: 3,
    blocks: [
      { type: 'subheading', text: 'Suppressive Fire' },
      {
        type: 'paragraph',
        text: 'Costs 1 Action and 10 Bullets. Everyone within 25 m/yds out of cover and in line of sight must roll WILL + Concentration + 1d10 vs. your REF + Autofire + 1d10. Anyone who fails must do anything they can to reach cover during their next Turn.',
      },
      { type: 'subheading', text: 'Autofire' },
      {
        type: 'paragraph',
        text: "Costs 1 Action and 10 Bullets. Cannot make Aimed Shots. Targets with REF 8+ can try to dodge using Evasion Skill. Uses Autofire Skill and the table below. Damage = 2d6 x amount Check beat the DV by (up to a maximum denoted by weapon's Autofire).",
      },
    ],
  },
  {
    id: 'autofire-dvs',
    group: 'ranged',
    title: 'Autofire DVs Based on Range (in m/yds)',
    sourcePage: 3,
    blocks: [
      {
        type: 'table',
        columns: ['Weapon Type', '0-6', '7-12', '13-25', '26-50', '51-100'],
        rows: [
          ['SMGs (Autofire 3)', '20', '17', '20', '25', '30'],
          ['Assault Rifle (Autofire 4)', '22', '20', '17', '20', '25'],
        ],
      },
    ],
  },
  {
    id: 'aimed-shots',
    group: 'ranged',
    title: 'Aimed Shots',
    sourcePage: 3,
    blocks: [
      { type: 'paragraph', text: '1 ROF. -8 to the Check.' },
      {
        type: 'paragraph',
        text: 'Can aim Melee and Ranged Attacks (but not Autofire or area effects). On a hit, deal damage + effect.',
      },
      {
        type: 'table',
        columns: ['Aiming for...', 'Effect'],
        rows: [
          ['Head', 'Multiply damage that penetrates head armor x2.'],
          ['Held Item', 'If damage penetrates armor, target drops held item of your choice to the ground.'],
          ['Leg', "If damage penetrates armor, target suffers the Broken Leg Critical Injury (if leg isn't already broken)."],
        ],
      },
    ],
  },
  {
    id: 'weapon-damage-rof',
    group: 'ranged',
    title: 'Weapon Damage and Rate of Fire by Type',
    sourcePage: 3,
    wide: true,
    blocks: [
      { type: 'paragraph', text: 'Melee Weapon Damage ignores 1/2 SP.' },
      {
        type: 'table',
        columns: ['Weapon Type', 'DMG', 'ROF'],
        rows: [
          ['Medium Pistol', '2d6', '2'],
          ['Heavy Pistol', '3d6', '2'],
          ['Very Heavy Pistol', '4d6', '1'],
          ['SMG', '2d6', '1'],
          ['Heavy SMG', '3d6', '1'],
          ['Shotgun (Slug)', '5d6', '1'],
          ['Assault Rifle', '5d6', '1'],
          ['Sniper Rifle', '5d6', '1'],
          ['Bows & Crossbows', '4d6', '1'],
          ['Grenade Launcher', '6d6', '1'],
          ['Rocket Launcher', '8d6', '1'],
          ['Light Melee', '1d6', '2'],
          ['Medium Melee', '2d6', '2'],
          ['Heavy Melee', '3d6', '2'],
          ['Very Heavy Melee', '4d6', '1'],
        ],
      },
    ],
  },
  {
    id: 'melee-combat-resolution',
    group: 'melee',
    title: 'Melee Combat Resolution',
    sourcePage: 4,
    blocks: [
      {
        type: 'formula',
        lines: ["Attacker's DEX + Relevant Melee Attack Skill + 1d10 vs. Defender's DEX + Evasion Skill + 1d10"],
      },
      {
        type: 'paragraph',
        text: 'Damage from Melee Weapon and Martial Arts Attacks ignore 1/2 armor SP. Damage from Brawling Attacks does not ignore 1/2 armor SP.',
      },
    ],
  },
  {
    id: 'brawling',
    group: 'melee',
    title: 'Brawling',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: 'Brawling uses the Brawling Skill to attack and is 2 ROF.' },
      { type: 'paragraph', text: 'Damage based on BODY. Cyberarm always does at least 2d6.' },
      { type: 'paragraph', text: 'Brawling is also the Skill used for initiating and defending against a Grapple.' },
    ],
  },
  {
    id: 'martial-arts',
    group: 'melee',
    title: 'Martial Arts',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: 'Requires Martial Arts Skill. Martial Arts Attacks are made at 2 ROF.' },
      { type: 'paragraph', text: 'Martial arts uses the Martial Arts Skill to make Martial Arts Attacks and perform Martial Arts Special Moves.' },
      { type: 'paragraph', text: 'Martial Arts Attacks ignore 1/2 armor SP.' },
    ],
  },
  {
    id: 'body-damage',
    group: 'melee',
    title: 'Brawling and Martial Arts Damage',
    sourcePage: 4,
    blocks: [
      {
        type: 'table',
        columns: ['BODY', '≤4', '5-6', '7-10', '≥ 11'],
        rows: [['Damage', '1d6', '2d6', '3d6', '4d6']],
      },
    ],
  },
  {
    id: 'grab',
    group: 'melee',
    title: 'Grab',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: "As an Action: Grab and hold someone, take an object they're holding, or escape a Grapple." },
      { type: 'formula', lines: ['DEX + Brawling + 1d10 vs.', 'DEX + Brawling + 1d10'] },
      { type: 'paragraph', text: 'Anyone in a Grapple takes a -2 to all Actions. Defender cannot use Move Action and is dragged with Attacker when they Move. Attacker can end Grapple at any time.' },
    ],
  },
  {
    id: 'choke',
    group: 'melee',
    title: 'Choke',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: "Attacker in Grapple can use an Action to Choke. No Check required. Automatically does BODY STAT in damage directly to target's Hit Points. A target Choked for 3 successive Rounds goes Unconscious." },
    ],
  },
  {
    id: 'throw-object',
    group: 'melee',
    title: 'Throw Object',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: 'Throw an object up to 25 m/yds.' },
      { type: 'formula', lines: ['DEX + Athletics + 1d10 vs. DV', '(based on Grenade Launcher on Ranged DV Table).'] },
      { type: 'paragraph', text: 'Anyone with REF 8 or higher can try to dodge using the Evasion Skill. Thrown Melee Weapons do not ignore 1/2 armor SP.' },
    ],
  },
  {
    id: 'armor',
    group: 'melee',
    title: 'Armor',
    sourcePage: 4,
    blocks: [
      { type: 'formula', lines: ['Final Damage = Damage Roll - Armor SP'] },
      { type: 'paragraph', text: "Melee Weapon and Martial Arts Attacks ignore 1/2 SP. If damage penetrates the armor lower armor's SP by 1." },
      {
        type: 'table',
        columns: ['Armor Type', 'SP', 'Penalty to REF, DEX & MOVE'],
        rows: [
          ['Leathers', '4', 'None'],
          ['Kevlar®', '7', 'None'],
          ['Light Armorjack', '11', 'None'],
          ['Bodyweight Suit', '11', 'None'],
          ['Medium Armorjack', '12', '-2'],
          ['Heavy Armorjack', '13', '-2'],
          ['Flak', '15', '-4'],
          ['Metalgear®', '18', '-4'],
        ],
      },
    ],
  },
  {
    id: 'cover',
    group: 'melee',
    title: 'Cover',
    sourcePage: 4,
    wide: true,
    blocks: [
      { type: 'paragraph', text: "You are considered to be in cover if you are fully behind something that could stop a bullet. If it cannot stop a bullet, it is not cover. If they have line of sight on you, you aren't in cover." },
      {
        type: 'table',
        columns: ['Type of Cover', 'Thick HP', 'Thin HP'],
        rows: [
          ['Steel', '50 HP', '25 HP'],
          ['Stone', '40 HP', '20 HP'],
          ['Bulletproof Glass', '30 HP', '15 HP'],
          ['Concrete', '25 HP', '10 HP'],
          ['Wood', '20 HP', '5 HP'],
          ['Plaster/Foam/Plastic', '15 HP', '0 HP (Not Cover)'],
        ],
      },
    ],
  },
  {
    id: 'explosives',
    group: 'melee',
    title: 'Explosives',
    sourcePage: 4,
    blocks: [
      { type: 'paragraph', text: 'Target a specific 2m/yd square, not a specific target. All targets not behind cover within a 10m/yd squared area around target take damage.' },
      { type: 'paragraph', text: 'Roll damage once, not per target. If the cover is destroyed by the explosion, any target behind the cover takes full damage.' },
      { type: 'paragraph', text: 'Targets w/ REF 8 or higher can choose to dodge using Evasion.' },
    ],
  },
  {
    id: 'wound-states',
    group: 'damage',
    title: 'Wound States',
    sourcePage: 5,
    wide: true,
    blocks: [
      { type: 'paragraph', text: 'Stabilize using First Aid or Paramedic Skill.' },
      {
        type: 'table',
        columns: ['Wound State', 'Threshold', 'Wound Effect'],
        rows: [
          ['Lightly Wounded', 'Less than Full HP', 'None • Stabilization DV10'],
          ['Seriously Wounded', 'Less than 1/2 HP (round up)', '-2 to all Actions • Stabilization DV13'],
          ['Mortally Wounded', 'Less than 1 HP', '-4 to all Actions • -6 to MOVE (Minimum 1) • Must make a Death Save at start of each one of their Turns. • DV15 to heal back to 1 HP, and Unconscious for 1 minute.'],
        ],
      },
    ],
  },
  {
    id: 'body-critical-injuries',
    group: 'damage',
    title: 'Body Critical Injuries',
    sourcePage: 5,
    wide: true,
    blocks: [
      { type: 'paragraph', text: 'Scored if 2+ dice come up 6s during a Damage Roll. Bonus Damage for all Injuries is 5.' },
      {
        type: 'table',
        columns: ['2d6', 'Injury', 'Injury Effect', 'Quick Fix', 'Treatment'],
        rows: [
          ['2', 'Dismembered Arm', 'Items held in hand are dropped. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
          ['3', 'Dismembered Hand', 'Items held in hand are dropped. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
          ['4', 'Collapsed Lung', '-2 to MOVE (min. 1). Base Death Save Penalty +1.', 'Paramedic DV15', 'Surgery DV15'],
          ['5', 'Broken Ribs', "At the end of every Turn where you move further than 4m/yds on foot, you re-suffer this Critical Injury's Bonus Damage directly to your Hit Points.", 'Paramedic DV13', 'Paramedic DV15 or Surgery DV13'],
          ['6', 'Broken Arm', "Broken Arm cannot be used. Drop any items in that arm's hand immediately.", 'Paramedic DV13', 'Paramedic DV15 or Surgery DV13'],
          ['7', 'Foreign Object', "At the end of every Turn where you move further than 4m/yds on foot, you re-suffer this Critical Injury's Bonus Damage directly to your Hit Points.", 'First Aid or Paramedic DV13', 'Quick Fix removes'],
          ['8', 'Broken Leg', '-4 to MOVE (min. 1).', 'Paramedic DV13', 'Paramedic DV15 or Surgery DV13'],
          ['9', 'Torn Muscle', '-2 to Melee Attacks.', 'First Aid or Paramedic DV13', 'Quick Fix removes'],
          ['10', 'Spinal Injury', "Next Turn, you can't take any Action but a Move Action. Base Death Save Penalty +1.", 'Paramedic DV15', 'Surgery DV15'],
          ['11', 'Crushed Fingers', '-4 to all Actions involving that hand.', 'Paramedic DV13', 'Surgery DV15'],
          ['12', 'Dismembered Leg', '-6 to MOVE (min. 1). You cannot dodge attacks. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
        ],
      },
    ],
  },
  {
    id: 'head-critical-injuries',
    group: 'damage',
    title: 'Head Critical Injuries',
    sourcePage: 5,
    wide: true,
    blocks: [
      { type: 'paragraph', text: '2+ dice come up 6s during a Damage Roll for an Aimed Shot to the Head. Bonus Damage for all Injuries is 5.' },
      {
        type: 'table',
        columns: ['2d6', 'Injury', 'Injury Effect', 'Quick Fix', 'Treatment'],
        rows: [
          ['2', 'Lost Eye', '-4 to Ranged Attacks & Perception Checks involving vision. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
          ['3', 'Brain Injury', '-2 to all Actions. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
          ['4', 'Damaged Eye', '-2 to Ranged Attacks & Perception Checks involving vision.', 'Paramedic DV15', 'Surgery DV13'],
          ['5', 'Concussion', '-2 to all Actions', 'First Aid or Paramedic DV13', 'Quick Fix removes'],
          ['6', 'Broken Jaw', '-4 to all Actions involving speech', 'Paramedic DV13', 'Paramedic or Surgery DV13'],
          ['7', 'Foreign Object', "At the end of every Turn where you move further than 4m/yds on foot, you re-suffer this Critical Injury's Bonus Damage directly to your Hit Points.", 'First Aid or Paramedic DV13', 'Quick Fix removes'],
          ['8', 'Whiplash', 'Base Death Save Penalty +1.', 'Paramedic DV13', 'Paramedic or Surgery DV13'],
          ['9', 'Cracked Skull', 'Damage for Aimed Shots to the head increases to x3. Base Death Save Penalty +1.', 'Paramedic DV15', 'Paramedic or Surgery DV15'],
          ['10', 'Damaged Ear', 'Whenever you move further than 4m/yds on foot in a Turn, you cannot take a Move Action on your next Turn. -2 to Perception Checks involving hearing.', 'Paramedic DV13', 'Surgery DV13'],
          ['11', 'Crushed Windpipe', 'You cannot speak. Base Death Save Penalty +1.', 'N/A', 'Surgery DV15'],
          ['12', 'Lost Ear', 'Whenever you move further than 4m/yds on foot in a Turn, you cannot take a Move Action on your next Turn. -4 to Perception Checks involving hearing. Base Death Save Penalty +1.', 'N/A', 'Surgery DV17'],
        ],
      },
    ],
  },
]

export function dataScreenSectionSearchText(section: DataScreenSection): string {
  const content = section.blocks.flatMap((block) => {
    if (block.type === 'paragraph' || block.type === 'subheading') return [block.text]
    if (block.type === 'formula') return [...block.lines, block.note ?? '']
    return [block.columns.join(' '), ...block.rows.map((row) => row.join(' '))]
  })

  return [section.title, ...content].join(' ').toLowerCase()
}
