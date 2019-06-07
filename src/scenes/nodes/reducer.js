import * as R from 'ramda';

export const initialState = {
  selectedId: undefined,
  editing: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'showNewNodeDialog': {
      return {
        ...state,
        showNewNodeDialog: true,
      };
    }
    case 'hideNewNodeDialog': {
      return {
        ...state,
        showNewNodeDialog: false,
      };
    }
    case 'select': {
      const { selectedId } = action.payload;
      return {
        ...state,
        selectedId,
        editing: false,
      };
    }
    case 'edit': {
      const { selectedId } = action.payload;
      return {
        ...state,
        selectedId,
        editing: true,
      };
    }
    case 'create': {
      const { newNode } = action.payload;
      return {
        ...state,
        showNewNodeDialog: false,
        newNode,
      };
    }
    case 'cancelCreate': {
      return {
        ...state,
        newNode: undefined,
      };
    }
    case 'cancelUpdate': {
      return {
        ...state,
        selectedId: undefined,
      };
    }
    default: {
      return state;
    }
  }
};
