import React from 'react';
import useActiveCampaign from '../hooks/active-campaign';
import useCampaigns from '../hooks/campaigns';
import Option from './Option';
import Select from './Select';
import Label from './Label';
import CampaignLink from './CampaignLink';

const ActiveCampaignSelect = () => {
  const [campaign, setActiveCampaignById] = useActiveCampaign();
  const { campaigns } = useCampaigns();

  const campaignOptions = campaigns.map(campaign => (
    <Option key={campaign.id} value={campaign.id}>{campaign.name}</Option>
  ));

  return (
    <>
      {campaign ? (
        <Label>
          <CampaignLink campaign={campaign}>Campaign</CampaignLink>
        </Label>
      ) : (
        <Label>
          Campaign
        </Label>
      )}
      <Select
        value={campaign ? campaign.id : ''}
        onChange={setActiveCampaignById}
      >
        <Option value=''>None</Option>
        {campaignOptions}
      </Select>
    </>
  );
}

export default ActiveCampaignSelect;
