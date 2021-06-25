import React from "react";
import styled from "styled-components";

const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  div {
    ${(props) =>
      (props.size === "md" &&
        `
        width: 12px;
        height: 12px;
        border: 2px solid white;
      `) ||
      (props.size === "sm" &&
        `
        width: 8px;
        height: 8px;
        border: 1px solid white;
      `)};
    background-color: ${({ active }) => (active ? "#1BD2A4" : "red")};
    border-radius: 99px;
    position: absolute;
    right: 0;
  }
`;

const Image = styled.img`
  ${(props) =>
    (props.size === "md" &&
      `
      width: 48px;
      height: 48px;
      border-radius: 99px;
    `) ||
    (props.size === "sm" &&
      `
      width: 32px;
      height: 32px;
      border-radius: 99px;
    `)}
  object-fit: cover;
`;

const Avatar = (props) => {
  return (
    <AvatarContainer {...props}>
      <div></div>
      <Image {...props} />
    </AvatarContainer>
  );
};

export default Avatar;
