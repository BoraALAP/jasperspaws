import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <Container onClick={props.onClick}>
      <span>{props.children}</span>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.color.five};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: 1em;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  max-width: 320px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.buttonshadow};
  margin: 24px 0;
`;

export default Button;
