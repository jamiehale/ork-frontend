import React from 'react';

const DefaultLayout = ({
  children,
}) => (
  <>
    <header>
      <h1>ORK</h1>
    </header>
    <section>
      {children}
    </section>
  </>
);

export default DefaultLayout;
