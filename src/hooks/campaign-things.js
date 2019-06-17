import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/things/actions';
import * as selectors from '../state/things/selectors';

const useCampaignThings = (campaignId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest(campaignId));
  }, [campaignId, dispatch]);

  const things = useSelector(selectors.getAllThings);

  const createThing = useCallback((thing) => {
    dispatch(actions.createThingRequest({ ...thing, campaignId }));
  }, [campaignId, dispatch]);

  return {
    things,
    createThing,
  };
};

export default useCampaignThings;
