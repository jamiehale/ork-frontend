import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/places/actions';
import * as selectors from '../state/places/selectors';

const useCampaignPlaces = (campaignId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest(campaignId));
  }, [campaignId, dispatch]);

  const places = useSelector(selectors.getAllPlaces);

  const createPlace = useCallback((place) => {
    dispatch(actions.createPlaceRequest({ ...place, campaignId }));
  }, [campaignId, dispatch]);

  return {
    places,
    createPlace,
  };
};

export default useCampaignPlaces;
