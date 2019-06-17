import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import NodesPage from './scenes/nodes/NodesPage';
import CampaignsPage from './scenes/campaigns/CampaignsPage';
import CampaignPage from './scenes/campaign/CampaignPage';
import PeoplePage from './scenes/people/PeoplePage';
import PersonPage from './scenes/person/PersonPage';
import PlacesPage from './scenes/places/PlacesPage';
import PlacePage from './scenes/place/PlacePage';
import ThingsPage from './scenes/things/ThingsPage';
import ThingPage from './scenes/thing/ThingPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100vh;
    font-size: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Container = styled.div``;

const App = ({
  history,
}) => (
  <Container>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact path="/" to="/campaigns" />
        <Route exact path="/campaigns" component={CampaignsPage} />
        <Route path="/campaigns/:id" component={CampaignPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route path="/people/:id" component={PersonPage} />
        <Route exact path="/places" component={PlacesPage} />
        <Route path="/places/:id" component={PlacePage} />
        <Route exact path="/things" component={ThingsPage} />
        <Route path="/things/:id" component={ThingPage} />
        <Route exact path="/nodes" component={NodesPage} />
        <Route path="/nodes/:id" component={NodesPage} />
      </Switch>
    </ConnectedRouter>
  </Container>
);

export default App;
