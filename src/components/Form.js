import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = ({
  children,
  onSubmit,
  ...props,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit();
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
