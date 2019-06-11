import * as R from 'ramda';

export const getAllCampaignIds = state => state.campaigns.ids;
export const getAllCampaignsById = state => state.campaigns.byId;
export const getAllCampaigns = state => state.campaigns.ids.map(id => getAllCampaignsById(state)[id]);
export const getCampaign = id => state => {
  console.log(id, state);
  return getAllCampaignsById(state)[id];
};
