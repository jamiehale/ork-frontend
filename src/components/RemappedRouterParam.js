import React from 'react';
import PropTypes from 'prop-types';

const withRemappedRouterParam = (paramName, propName) => (WrappedComponent) => {
  const innerFunc = ({ match, ...props }) => {
    const remappedParam = {
      [propName]: match.params[paramName],
    };

    return (
      <WrappedComponent
        {...remappedParam}
        match={match}
        {...props}
      />
    );
  };

  innerFunc.propTypes = ({
    match: PropTypes.object.isRequired,
  });

  return innerFunc;
};

export default withRemappedRouterParam;
