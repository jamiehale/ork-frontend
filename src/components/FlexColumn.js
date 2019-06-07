import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: ${props => (props.debug ? '1px solid red': 'none')};
`;

export default FlexColumn;
