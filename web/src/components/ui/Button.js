import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <Container onClick={props.onClick} secondary={props.secondary}>
      <span>{props.children}</span>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 32px;
  background-color: ${props =>
    props.secondary ? props.theme.color.white : props.theme.color.four};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1em;
  border-radius: ${({ theme }) => theme.radius};
  color: ${props => (props.secondary ? props.theme.color.five : props.theme.color.white)};
  border: ${props => (props.secondary ? `1px solid ${props.theme.color.four}` : "none")};
  text-align: center;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.buttonshadow};
`;

export default Button;
