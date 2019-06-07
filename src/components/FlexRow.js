import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  border: ${props => (props.debug ? '1px solid red': 'none')};
`;

export default FlexRow;
