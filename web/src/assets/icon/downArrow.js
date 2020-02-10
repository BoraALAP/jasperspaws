import React from "react";
import styled from "styled-components";

const DownArrow = props => {
  return (
    <Container opacity={props.opacity}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="white" />
      </svg>
    </Container>
  );
};

export default DownArrow;

const Container = styled.div`
  height: 24px;
  opacity: ${props => props.opacity};
`;
