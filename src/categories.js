import * as R from 'ramda';

export const allCategories = [
  {
    id: 'creature',
    name: 'Creature',
    types: [
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
    types: [
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
    types: [
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
    types: [],
  },
];

export const categoryMap = allCategories.reduce((map, category) => ({
  ...map,
  [category.id]: category,
}), {});

export const defaultTypeForCategoryId = categoryId => {
  const type = R.head(categoryMap[categoryId].types);
  if (type) {
    return type.id;
  }
  return undefined;
};
