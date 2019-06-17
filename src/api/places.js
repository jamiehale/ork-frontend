const fetchAllPlaces = (path, remote) => campaignId => remote.get(path(''), { params: { campaignId }});
const fetchPlace = (path, remote) => id => remote.get(path(`/${id}`));
const createPlace = (path, remote) => place => remote.post(path(''), { place });

export default (path, remote) => ({
  fetchAllPlaces: fetchAllPlaces(path, remote),
  fetchPlace: fetchPlace(path, remote),
  createPlace: createPlace(path, remote),
});
