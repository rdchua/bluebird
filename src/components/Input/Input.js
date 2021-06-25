import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 56px;
  background: transparent;
  min-width: 200px;
  border-radius: 18px;
  border: 1px solid #4a4754;
  position: relative;
  padding: 0 16px;

  :focus-within {
    border: 2px solid var(--blue-900) !important;
  }

  :hover {
    border: 1px solid var(--blue-900);
  }

  svg {
    font-size: 18px;
  }
`;

const Label = styled.span`
  position: absolute;
  pointer-events: none;
  left: ${({ leftIcon }) => (leftIcon ? "48px" : "24px")};
  top: 16px;
  font-size: 14px;
  color: var(--gray-600);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: translate(0, 0px) scale(1);
`;

const InputStyled = styled.input`
  flex: 1;
  outline: none;
  background-color: transparent;
  border: 0;
  padding: ${(props) => (props.leftIcon ? "0 14px" : "0 8px")};
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: var(--gray-1000);

  ::placeholder {
    color: var(--gray-400);
  }

  :disabled {
    color: var(--gray-300);
  }

  :disabled + span,
  :not(:focus):valid + span {
    color: var(--gray-300);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  :focus + span,
  :not(:focus):valid + span {
    color: var(--gray-600);
    transform: translate(0, -12px) scale(1);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

const HelperText = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: var(--gray-500);
`;

const Input = ({ leftIcon, rightIcon, ...props }) => {
  return (
    <>
      <InputWrapper>
        {leftIcon}
        <InputStyled required="required" leftIcon={leftIcon} />
        <Label leftIcon={leftIcon}>{props.label}</Label>
        {rightIcon}
      </InputWrapper>
      {/* <HelperText>Helper text</HelperText> */}
    </>
  );
};

export default Input;
