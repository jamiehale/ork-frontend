import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/campaigns/actions';
import * as selectors from '../state/campaigns/selectors';

const useActiveCampaign = () => {
  const dispatch = useDispatch();

  const campaign = useSelector(selectors.getActiveCampaign);

  const setActiveCampaignById = useCallback((campaignId) => {
    dispatch(actions.setActiveCampaignId(campaignId));
  }, [dispatch]);

  return [
    campaign,
    setActiveCampaignById,
  ];
};

export default useActiveCampaign;
