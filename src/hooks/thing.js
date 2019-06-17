import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/things/actions';
import * as selectors from '../state/things/selectors';

const useThing = (thingId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRequest(thingId));
  }, [dispatch, thingId]);

  const thing = useSelector(selectors.getThing(thingId));

  return {
    thing,
  };
};

export default useThing;
