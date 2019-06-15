const fetchAllPeople = (path, remote) => campaignId => remote.get(path(''), { params: { campaignId }});
const fetchPerson = (path, remote) => id => remote.get(path(`/${id}`));
const createPerson = (path, remote) => person => remote.post(path(''), { person });

export default (path, remote) => ({
  fetchAllPeople: fetchAllPeople(path, remote),
  fetchPerson: fetchPerson(path, remote),
  createPerson: createPerson(path, remote),
});
