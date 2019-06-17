export const getAllElementsIds = state => state.elements.ids;
export const getAllElementsById = state => state.elements.byId;
export const getAllElements = state => getAllElementsIds(state).map(id => getAllElementsById(state)[id]);
export const getElement = id => state => getAllElementsById(state)[id];
