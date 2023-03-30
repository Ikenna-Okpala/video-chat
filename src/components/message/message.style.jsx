import styled from "styled-components";
import {
  BLUE_GREEN,
  ELEMENT_BACKGROUND_COLOR,
  ELEMENT_TEXT_COLOR,
  GREY,
  LIGHT_GREEN,
  MILK,
  MILK_DARK,
  MILK_LIGHT,
  TEXT_COLOR,
} from "../../color/color";

export const MessageContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;

  flex-direction: column;

  row-gap: 10px;
`;

export const MessageHeader = styled.span`
  font-size: 0.8rem;
  color: ${GREY};
  font-weight: 500;
`;

export const MessageBody = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 10px 10px 10px 10px;

  border-radius: 30px;

  background-color: ${({ isUser }) => (isUser ? BLUE_GREEN : MILK_LIGHT)};
`;

export const MessageParagraph = styled.p`
  word-wrap: break-word;
  width: fit-content;
  height: fit-content;
  margin: 0 0 0 0;

  color: ${ELEMENT_TEXT_COLOR};

  font-size: 0.9rem;
`;
