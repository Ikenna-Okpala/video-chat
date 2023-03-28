import styled from "styled-components";
import {
  ELEMENT_BACKGROUND_COLOR,
  ELEMENT_TEXT_COLOR,
} from "../../color/color";

export const CustomizedButton = styled.button`
  height: ${({ height }) => `${height}px`};
  font-size: 15px;
  background-color: ${ELEMENT_BACKGROUND_COLOR};
  color: ${ELEMENT_TEXT_COLOR};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  width: auto;
  padding: 0px 20px 0px 10px;
  transition: 0.5s;
  column-gap: 5px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    fill: ${ELEMENT_TEXT_COLOR};
  }

  span {
    fill: ${ELEMENT_TEXT_COLOR};
  }
`;
