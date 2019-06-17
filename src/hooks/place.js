import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/places/actions';
import * as selectors from '../state/places/selectors';

const usePlace = (placeId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRequest(placeId));
  }, [dispatch, placeId]);

  const place = useSelector(selectors.getPlace(placeId));

  return {
    place,
  };
};

export default usePlace;
