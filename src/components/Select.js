import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select``;

const Select = ({
  children,
  onChange,
  ...props,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <StyledSelect
      onChange={handleChange}
      {...props}
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
