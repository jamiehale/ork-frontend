const fetchAllElements = (path, remote) => campaignId => remote.get(path(''), { params: { campaignId }});
const fetchElement = (path, remote) => id => remote.get(path(`/${id}`));
const createElement = (path, remote) => element => remote.post(path(''), { element });

export default (path, remote) => ({
  fetchAllElements: fetchAllElements(path, remote),
  fetchElement: fetchElement(path, remote),
  createElement: createElement(path, remote),
});
