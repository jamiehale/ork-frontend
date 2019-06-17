import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/elements/actions';
import * as selectors from '../state/elements/selectors';

const useElement = (elementId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRequest(elementId));
  }, [dispatch, elementId]);

  const element = useSelector(selectors.getElement(elementId));

  return {
    element,
  };
};

export default useElement;
