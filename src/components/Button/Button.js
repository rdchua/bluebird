import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #4d77ff;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  font-weight: 1em;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 0.02em;
  width: calc(100% - 32px);

  :hover {
    cursor: pointer;
  }
`;

const Button = () => {
  return <Wrapper>New Email</Wrapper>;
};

export default Button;
