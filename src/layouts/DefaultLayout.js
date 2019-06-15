import React from 'react';
import ActiveCampaignSelect from '../components/ActiveCampaignSelect';

const DefaultLayout = ({
  children,
}) => (
  <>
    <header>
      <h1>ORK</h1>
      <ActiveCampaignSelect />
    </header>
    <section>
      {children}
    </section>
  </>
);

export default DefaultLayout;
