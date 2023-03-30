import styled, { css } from "styled-components";
import {
  BLUE_GREEN,
  ELEMENT_BACKGROUND_COLOR,
  TEXT_COLOR,
  WHITE,
} from "../../color/color";

const shrinkLabelStyles = css`
  top: 5px;
  font-size: 14px;
`;

export const LinkLabel = styled.label`
  font-size: 18px;
  left: 20px;
  top: 23px;
  color: #eeeeee;

  transition: 300ms ease all;

  position: absolute;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const LinkInput = styled.input`
  width: 400px;
  height: 60px;

  border-radius: 8px;

  background: transparent;
  border: 3px solid ${WHITE};
  padding-left: 20px;

  color: ${WHITE};
  font-size: 18px;

  :focus {
    border-color: ${BLUE_GREEN};

    outline: none;
  }

  :focus ~ ${LinkLabel} {
    ${shrinkLabelStyles}
  }
`;

export const LinkInputContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;

  position: relative;
`;
