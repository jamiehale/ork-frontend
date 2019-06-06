import styled from 'styled-components';
import Button from './Button';

const SubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  border: 2px solid black;
  background: #cdc;
`;

export default SubmitButton;
