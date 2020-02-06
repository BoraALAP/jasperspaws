import React from "react";
import Icon from "../../../assets/icon";
import styled from "styled-components";

const PawDivider = props => {
  return (
    <Container>
      <Line />
      <Icon symbol="paw" opacity="0.3" />
      <Line />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  display: grid;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.three};
`;

export default PawDivider;
