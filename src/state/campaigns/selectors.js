export const getAllCampaignIds = state => state.campaigns.ids;
export const getAllCampaignsById = state => state.campaigns.byId;
export const getAllCampaigns = state => state.campaigns.ids.map(id => getAllCampaignsById(state)[id]);
export const getCampaign = id => state => getAllCampaignsById(state)[id];

export const getActiveCampaignId = state => state.campaigns.activeId;
export const getActiveCampaign = state => getCampaign(getActiveCampaignId(state))(state);
