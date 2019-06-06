import React from 'react';
import EntityView from './components/views/EntityView';

const zhentarim = {
  type: 'group',
  subtype: 'faction',
  name: 'Zhentarim',
  aliases: [
    'The Black Network',
    'Zhents',
  ],
  description: 'Lorem ipsum...',
  relationships: [
    {}
  ]
}
const kella = {
  type: 'npc',
  subtype: '?',
  name: 'Kella',
  aliases: [],
  description: 'She\'s a spy!',
  relationships: [
    {
      type: 'membership'
    }
  ]
};

const App = () => {

  return (
    <>
      <header>
        <h1>ORK</h1>
      </header>
      <section>
        <EntityView />
      </section>
    </>
  );
};

export default App;
