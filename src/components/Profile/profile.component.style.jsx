import styled from "styled-components";
import { ELEMENT_BACKGROUND_COLOR, TEXT_COLOR } from "../../color/color";
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
    usernameLength === 0 ? TEXT_COLOR : ELEMENT_BACKGROUND_COLOR};
`;
