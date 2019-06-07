export const showNewNodeDialog = () => ({
  type: 'showNewNodeDialog',
});

export const hideNewNodeDialog = () => ({
  type: 'hideNewNodeDialog',
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

export const cancelCreate = () => ({
  type: 'cancelCreate',
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

export const cancelUpdate = () => ({
  type: 'cancelUpdate',
});