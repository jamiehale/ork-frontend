export const getNodesById = state => state.nodes.byId;
export const getNodeIds = state => state.nodes.ids;
export const getNodes = state => getNodeIds(state).map(id => getNodesById(state)[id]);
