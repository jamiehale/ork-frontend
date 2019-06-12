const fetchAllCampaigns = (path, remote) => () => remote.get(path(''));
const fetchCampaign = (path, remote) => id => remote.get(path(`/${id}`));
const createCampaign = (path, remote) => campaign => remote.post(path(''), { campaign });

export default (path, remote) => ({
  fetchAllCampaigns: fetchAllCampaigns(path, remote),
  fetchCampaign: fetchCampaign(path, remote),
  createCampaign: createCampaign(path, remote),
});
