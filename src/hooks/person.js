import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/people/actions';
import * as selectors from '../state/people/selectors';

const usePerson = (personId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadRequest(personId));
  }, [dispatch, personId]);

  const person = useSelector(selectors.getPerson(personId));

  return {
    person,
  };
};

export default usePerson;
