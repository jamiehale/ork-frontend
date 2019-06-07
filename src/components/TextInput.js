import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input.attrs({
  type: 'text',
})``;

const TextInput = React.forwardRef(({
  onChange,
  ...props,
}, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <StyledTextInput
      ref={ref}
      onChange={handleChange}
      {...props}
    />
  );
});

export default TextInput;
