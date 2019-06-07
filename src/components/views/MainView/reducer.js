import * as R from 'ramda';

export const initialState = {
  nodeIds: [],
  nodes: {},
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
    case 'add': {
      const { node } = action.payload;
      const index = state.nodeIds.length;
      const id = index + 1;
      return {
        ...state,
        newNode: undefined,
        nodes: {
          ...state.nodes,
          [id]: {
            ...node,
            id,
          },
        },
        nodeIds: R.append(id, state.nodes),
      };
    }
    case 'update': {
      const { node } = action.payload;
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [node.id]: node,
        },
        editing: false,
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
