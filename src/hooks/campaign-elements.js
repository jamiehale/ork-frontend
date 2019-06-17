import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/elements/actions';
import * as selectors from '../state/elements/selectors';

const useCampaignElements = (campaignId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest(campaignId));
  }, [campaignId, dispatch]);

  const elements = useSelector(selectors.getAllElements);

  const createElement = useCallback((element) => {
    dispatch(actions.createElementRequest({ ...element, campaignId }));
  }, [campaignId, dispatch]);

  return {
    elements,
    createElement,
  };
};

export default useCampaignElements;
