import styled from "styled-components";
import { ELEMENT_BACKGROUND_COLOR, TEXT_COLOR } from "../../color/color";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const RowContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;

  flex-direction: row;

  column-gap: 40px;

  align-items: center;
`;

export const ClickableText = styled.span`
  font-size: 18px;

  color: ${({ length }) =>
    length === 0 ? TEXT_COLOR : ELEMENT_BACKGROUND_COLOR};
  cursor: ${({ length }) => (length === 0 ? "default" : "pointer")};
`;
