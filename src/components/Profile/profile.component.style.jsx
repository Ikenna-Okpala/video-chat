import styled from "styled-components";
import {
  BLUE_GREEN,
  ELEMENT_BACKGROUND_COLOR,
  GREY,
  TEXT_COLOR,
  WHITE,
} from "../../color/color";
import { CustomizedButton } from "../button/button.style";

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  row-gap: 40px;
`;

export const NextButton = styled(CustomizedButton)`
  padding: 0px 20px 0px 20px;
  background-color: ${({ usernameLength }) =>
    usernameLength === 0 ? WHITE : BLUE_GREEN};

  span {
    color: ${GREY};
  }
`;
