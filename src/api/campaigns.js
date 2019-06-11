const fetchAllCampaigns = (path, remote) => () => remote.get(path(''));
const fetchCampaign = (path, remote) => id => remote.get(path(`/${id}`));

export default (path, remote) => ({
  fetchAllCampaigns: fetchAllCampaigns(path, remote),
  fetchCampaign: fetchCampaign(path, remote),
});
