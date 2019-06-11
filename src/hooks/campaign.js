import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/campaigns/actions';
import * as selectors from '../state/campaigns/selectors';

const useCampaign = (campaignId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRequest(campaignId));
  }, [dispatch, campaignId]);

  const campaign = useSelector(selectors.getCampaign(campaignId));

  return {
    campaign,
  };
};

export default useCampaign;
