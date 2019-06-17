export const getAllPlacesIds = state => state.places.ids;
export const getAllPlacesById = state => state.places.byId;
export const getAllPlaces = state => getAllPlacesIds(state).map(id => getAllPlacesById(state)[id]);
export const getPlace = id => state => getAllPlacesById(state)[id];
