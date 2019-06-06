import styled from 'styled-components';

const LinkButton = styled.button.attrs({
  type: 'button'
})`
  background: none;
  color: inherit;
  border: none;
  padding: 0px!important;
  font: inherit;
  cursor: pointer;
  border-bottom: 1px solid black;
`;

export default LinkButton;
