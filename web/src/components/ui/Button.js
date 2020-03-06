import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <Container
      onClick={props.onClick}
      secondary={props.secondary}
      type={props.type}
      disabled={props.disabled}
    >
      <span>{props.children}</span>
    </Container>
  );
};

const Container = styled.button`
  padding: 12px 32px;
  background-color: ${props => {
    if (props.disabled) {
      return props.theme.color.one;
    } else if (props.secondary) {
      return props.theme.color.white;
    } else {
      return props.theme.color.four;
    }
  }};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1em;
  font-family: ${({ theme }) => theme.font.family.body};
  border-radius: ${({ theme }) => theme.radius};
  color: ${props => (props.secondary ? props.theme.color.five : props.theme.color.white)};
  border: ${props => (props.secondary ? `1px solid ${props.theme.color.four}` : "none")};
  text-align: center;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.buttonshadow};

  transition: all 0.55s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.buttonshadowhover};
  }
`;

export default Button;
