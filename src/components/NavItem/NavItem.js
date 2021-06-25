import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 0px;

  svg {
    fill: #8e8c94;
    font-size: 18px;
  }

  p {
    flex: 1;
    margin: 0;
    margin-left: 16px;
    text-align: left;
    color: white;
  }

  small {
    flex: 1;
    text-align: right;
    color: lightgray;
    font-size: 12px;
    color: #8e8c94;
  }
`;

const NavItem = ({ children, leftIcon, rightIcon }) => {
  return (
    <Wrapper>
      {leftIcon}
      <p>{children}</p>
      <small>{rightIcon}</small>
    </Wrapper>
  );
};

export default NavItem;
