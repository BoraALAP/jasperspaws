import React from "react";
import styled from "styled-components";
import Title from "../ui/Title";

const Form = ({ name }) => {
  return (
    <Container>
      <Title title={`Ask About ${name}`} />
      <FormS>
        <Left>left</Left>
        <Right>right</Right>
      </FormS>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.two_bg};

  padding: calc(${({ theme }) => theme.pagePadding} * 2);
  box-sizing: border-box;
  display: grid;

  margin: 0 -6% -6%;
`;

const FormS = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2.5em;
`;

const Left = styled.div`
  display: grid;
`;

const Right = styled.div`
  display: grid;
`;

export default Form;
