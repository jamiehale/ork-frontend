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

export const add = node => ({
  type: 'add',
  payload: {
    node,
  },
});

export const update = node => ({
  type: 'update',
  payload: {
    node,
  },
});
