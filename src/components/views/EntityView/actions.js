export const browse = () => ({
  type: 'browse',
});

export const view = selection => ({
  type: 'view',
  payload: {
    selection,
  },
});

export const edit = selection => ({
  type: 'edit',
  payload: {
    selection,
  },
});

export const create = selection => ({
  type: 'create',
});

export const add = entity => ({
  type: 'add',
  payload: {
    entity,
  },
});

export const update = entity => ({
  type: 'update',
  payload: {
    entity,
  },
});
