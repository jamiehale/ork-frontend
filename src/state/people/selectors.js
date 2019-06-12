export const getAllPeopleIds = state => state.people.ids;
export const getAllPeopleById = state => state.people.byId;
export const getAllPeople = state => getAllPeopleIds(state).map(id => getAllPeopleById(state)[id]);
export const getPerson = id => state => getAllPeopleById(state)[id];
