import * as R from 'ramda';

export const allNodeTypes = [
  {
    id: 'creature',
    name: 'Creature',
    subtypes: [
      {
        id: 'pc',
        name: 'PC',
      },
      {
        id: 'npc',
        name: 'NPC',
      },
      {
        id: 'monster',
        name: 'Monster',
      },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    subtypes: [
      {
        id: 'continent',
        name: 'Continent',
      },
      {
        id: 'region',
        name: 'Region',
      },
      {
        id: 'city',
        name: 'City',
      },
      {
        id: 'town',
        name: 'Town',
      },
      {
        id: 'dungeon',
        name: 'Dungeon',
      },
      {
        id: 'keep',
        name: 'Keep',
      },
      {
        id: 'encounter',
        name: 'Encounter',
      },
      {
        id: 'area',
        name: 'Area',
      },
    ],
  },
  {
    id: 'group',
    name: 'Group/Affiliation',
    subtypes: [
      {
        id: 'faction',
        name: 'Faction',
      },
      {
        id: 'clan',
        name: 'Clan',
      },
      {
        id: 'church',
        name: 'Church',
      },
      {
        id: 'gang',
        name: 'Gang',
      },
      {
        id: 'family',
        name: 'Family',
      },
    ]
  },
  {
    id: 'item',
    name: 'Item',
    subtypes: [],
  },
];

export const nodeTypeMap = allNodeTypes.reduce((map, nodeType) => ({
  ...map,
  [nodeType.id]: nodeType,
}), {});

export const defaultNodeSubtypeIdFor = nodeTypeId => {
  const subtype = R.head(nodeTypeMap[nodeTypeId].subtypes);
  if (subtype) {
    return subtype.id;
  }
  return undefined;
};
