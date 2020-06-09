import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const colorStyles = ({ theme, color, outline }) => {
  const selectedColor = theme.palette[color];
  return css`
    background: ${selectedColor};
    &:hover {
      background: ${lighten(0.1, selectedColor)};
    }
    &:active {
      background: ${darken(0.1, selectedColor)};
    }
    ${outline &&
    css`
      color: ${selectedColor};
      background: none;
      border: 1px solid ${selectedColor};
      &:hover {
        background: ${selectedColor};
        color: white;
      }
    `}
  `;
};

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = ({ size, fullwidth }) => {
  return css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    ${fullwidth &&
    css`
      width: 100%;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
  `;
};

const StyledButton = styled.button`
  /* common style */  
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  /* etc */
  & + & {
    margin-left: 1rem;
  }

  /* size */
  ${sizeStyles}

  /* color */
  ${colorStyles}
`;

const Button = ({ children, color, size, outline, fullwidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
