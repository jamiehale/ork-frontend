import { useCallback } from 'react';
import useLoggingReducer from '../../hooks/logging-reducer';

const SHOW_NEW_PERSON_DIALOG = 'SHOW_NEW_PERSON_DIALOG';
const HIDE_NEW_PERSON_DIALOG = 'HIDE_NEW_PERSON_DIALOG';

const dispatchShowNewPersonDialog = (dispatch) => () => {
  dispatch({
    type: SHOW_NEW_PERSON_DIALOG,
  });
};

const dispatchHideNewPersonDialog = (dispatch) => () => {
  dispatch({
    type: HIDE_NEW_PERSON_DIALOG,
  });
};

const initialState = {
  showNewPersonDialog: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_NEW_PERSON_DIALOG: {
      return {
        ...state,
        showNewPersonDialog: true,
      };
    }
    case HIDE_NEW_PERSON_DIALOG: {
      return {
        ...state,
        showNewPersonDialog: false,
      }
    }
    default: {
      return state;
    }
  }
};

const useLocalReducer = () => {
  const [state, dispatch] = useLoggingReducer(reducer, initialState);

  const showNewPersonDialog = useCallback(dispatchShowNewPersonDialog(dispatch), [dispatch]);
  const hideNewPersonDialog = useCallback(dispatchHideNewPersonDialog(dispatch), [dispatch]);

  return {
    state,
    showNewPersonDialog,
    hideNewPersonDialog,
  };
};

export default useLocalReducer;
