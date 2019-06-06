import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select``;

const Select = ({
  children,
  ...props,
}) => (
  <StyledSelect {...props}>
    {children}
  </StyledSelect>
);

export default Select;
