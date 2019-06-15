import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/people/actions';
import * as selectors from '../state/people/selectors';

const useCampaignPeople = (campaignId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadAllRequest(campaignId));
  }, [campaignId, dispatch]);

  const people = useSelector(selectors.getAllPeople);

  const createPerson = useCallback((person) => {
    dispatch(actions.createPersonRequest({ ...person, campaignId }));
  }, [campaignId, dispatch]);

  return {
    people,
    createPerson,
  };
};

export default useCampaignPeople;
