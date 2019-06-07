import * as R from 'ramda';

export const initialState = {
  nodes: [],
  selectedNode: undefined,
  operation: 'browsing',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'browse': {
      return {
        ...state,
        operation: 'browsing',
      };
    }
    case 'view': {
      const { selection } = action.payload;
      return {
        ...state,
        selectedNode: selection,
        operation: 'viewing',
      };
    }
    case 'edit': {
      const { selection } = action.payload;
      return {
        ...state,
        selectedNode: selection,
        operation: 'editing',
      };
    }
    case 'create': {
      return {
        ...state,
        operation: 'creating',
      };
    }
    case 'add': {
      const { node } = action.payload;
      return {
        ...state,
        nodes: R.append(node, state.nodes),
        operation: 'browsing',
      };
    }
    case 'update': {
      const { node } = action.payload;
      return {
        ...state,
        nodes: R.update(state.selectedNode, node, state.nodes),
        operation: 'browsing',
      };
    }
    default: {
      return state;
    }
  }
};
