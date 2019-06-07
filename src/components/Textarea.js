import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea``;

const Textarea = ({
  onChange,
  ...props,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <StyledTextarea
      onChange={handleChange}
      {...props}
    />
  );
};

export default Textarea;
