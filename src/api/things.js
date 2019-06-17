const fetchAllThings = (path, remote) => campaignId => remote.get(path(''), { params: { campaignId }});
const fetchThing = (path, remote) => id => remote.get(path(`/${id}`));
const createThing = (path, remote) => thing => remote.post(path(''), { thing });

export default (path, remote) => ({
  fetchAllThings: fetchAllThings(path, remote),
  fetchThing: fetchThing(path, remote),
  createThing: createThing(path, remote),
});
