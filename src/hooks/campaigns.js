import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/campaigns/actions';
import * as selectors from '../state/campaigns/selectors';

const useCampaigns = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest());
  }, [dispatch]);

  const campaigns = useSelector(selectors.getAllCampaigns);

  return {
    campaigns,
  };
};

export default useCampaigns;
