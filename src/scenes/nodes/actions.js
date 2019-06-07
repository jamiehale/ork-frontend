export const browse = () => ({
  type: 'browse',
});

export const newNode = () => ({
  type: 'new',
});

export const select = selectedId => ({
  type: 'select',
  payload: {
    selectedId,
  },
});

export const edit = selectedId => ({
  type: 'edit',
  payload: {
    selectedId,
  },
});

export const create = (newNode) => ({
  type: 'create',
  payload: {
    newNode,
  },
});
