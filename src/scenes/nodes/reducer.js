export const initialState = {
  selectedId: undefined,
  newNode: undefined,
  mode: 'browse',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'browse': {
      return {
        selectedId: undefined,
        newNode: undefined,
        mode: 'browse',
      };
    }
    case 'new': {
      return {
        selectedId: undefined,
        newNode: undefined,
        mode: 'new',
      };
    }
    case 'select': {
      const { selectedId } = action.payload;
      return {
        selectedId,
        newNode: undefined,
        mode: 'view',
      };
    }
    case 'edit': {
      const { selectedId } = action.payload;
      return {
        selectedId,
        newNode: undefined,
        mode: 'edit',
      };
    }
    case 'create': {
      const { newNode } = action.payload;
      return {
        selectedId: undefined,
        newNode,
        mode: 'create',
      };
    }
    default: {
      return state;
    }
  }
};
