import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/campaigns/actions';
import * as selectors from '../state/campaigns/selectors';

const useCampaigns = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest());
  }, [dispatch]);

  const campaigns = useSelector(selectors.getAllCampaigns);

  const createCampaign = useCallback((campaign) => {
    dispatch(actions.createCampaignRequest(campaign));
  }, [dispatch]);

  return {
    campaigns,
    createCampaign,
  };
};

export default useCampaigns;
