import * as R from 'ramda';

export const allEntityTypes = [
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

export const entityTypeMap = allEntityTypes.reduce((map, entityType) => ({
  ...map,
  [entityType.id]: entityType,
}), {});

export const defaultEntitySubtypeIdFor = entityTypeId => {
  const subtype = R.head(entityTypeMap[entityTypeId].subtypes);
  if (subtype) {
    return subtype.id;
  }
  return undefined;
};
