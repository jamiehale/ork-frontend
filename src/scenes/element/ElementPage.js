import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withRemappedRouterParam from '../../components/RemappedRouterParam';
import DefaultLayout from '../../layouts/DefaultLayout';
import useElement from '../../hooks/element';
import CampaignLink from '../../components/CampaignLink';
import Button from '../../components/Button';
import useCampaign from '../../hooks/campaign';

const ElementPage = ({
  elementId,
}) => {
  const { element } = useElement(elementId);
  const { campaign } = useCampaign(element ? element.campaignId : undefined);

  const handleEdit = () => {

  };

  return (
    <DefaultLayout>
      {element && (
        <>
          <h1>Element: {element.name}</h1>
          {element.campaignId && (
            <h2>Campaign: <CampaignLink campaign={campaign} /></h2>
          )}
          <section>
            {element.type}
          </section>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </DefaultLayout>
  );
};

export default compose(
  withRouter,
  withRemappedRouterParam('id', 'elementId'),
)(ElementPage);
