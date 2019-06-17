export const getAllThingsIds = state => state.things.ids;
export const getAllThingsById = state => state.things.byId;
export const getAllThings = state => getAllThingsIds(state).map(id => getAllThingsById(state)[id]);
export const getThing = id => state => getAllThingsById(state)[id];
