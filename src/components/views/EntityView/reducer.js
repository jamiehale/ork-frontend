import * as R from 'ramda';

export const initialState = {
  entities: [],
  selectedEntity: undefined,
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
        selectedEntity: selection,
        operation: 'viewing',
      };
    }
    case 'edit': {
      const { selection } = action.payload;
      return {
        ...state,
        selectedEntity: selection,
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
      const { entity } = action.payload;
      return {
        ...state,
        entities: R.append(entity, state.entities),
        operation: 'browsing',
      };
    }
    case 'update': {
      const { entity } = action.payload;
      return {
        ...state,
        entities: R.update(state.selectedEntity, entity, state.entities),
        operation: 'browsing',
      };
    }
    default: {
      return state;
    }
  }
};
