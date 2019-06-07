import styled from 'styled-components';

const debugBorder = ({
  debug,
}) => {
  if (debug) {
    if (typeof debug === 'string') {
      return `border: 1px solid ${debug};`;
    }
    return 'border: 1px solid red;';
  }
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${debugBorder}
`;

export default FlexColumn;
