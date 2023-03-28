import styled from "styled-components";
import {
  CHAT_BOX_COLOR,
  CHAT_ICON_COLOR,
  CHAT_WINDOW_COLOR,
  DARK_RED,
  ELEMENT_BACKGROUND_COLOR,
  ELEMENT_TEXT_COLOR,
  LIGHT_GREEN,
  ROOM_BAR_COLOR,
  SITE_BACKGROUND_COLOR,
  TEXT_COLOR,
  VIDEO_VIEW_COLOR,
} from "../../color/color";

export const RoomContainer = styled.div`
  width: 100vw;
  height: 92vh;

  display: flex;

  flex-direction: column;
`;

export const RowContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const VideoView = styled.div`
  width: 75vw;
  height: 95vh;

  display: flex;
  flex-direction: column;

  margin-left: 2vh;
  margin-right: 2vh;
  margin-top: 5vh;
`;

export const RoomFooter = styled.div`
  width: 75vw;
  height: 8vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${SITE_BACKGROUND_COLOR};

  column-gap: 20px;
`;

export const ChatWindow = styled.div`
  width: 25vw;
  height: 95vh;

  box-sizing: border-box;

  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  border-radius: 30px 30px 0 0;
  background-color: ${TEXT_COLOR};

  margin-top: 5vh;
`;

export const VideoRow = styled.div`
  width: 75vw;
  height: 92vh;

  display: flex;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  column-gap: 40px;

  margin-bottom: 3vh;
`;

export const DevicesContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;

  flex-direction: row;

  align-items: center;

  column-gap: 15px;

  margin-left: 20px;
`;

export const VideoButton = styled.button`
  width: auto;
  height: auto;

  display: flex;
  cursor: pointer;

  flex-direction: column;
  background-color: ${({ on }) => (on ? ELEMENT_BACKGROUND_COLOR : DARK_RED)};
  border-radius: 15px;
  border: none;

  justify-content: center;
  align-items: center;

  svg {
    fill: ${ELEMENT_TEXT_COLOR};
  }

  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MicButton = styled(VideoButton)`
  background-color: ${({ on }) => (on ? ELEMENT_BACKGROUND_COLOR : DARK_RED)};
`;

export const ShareButton = styled(VideoButton)`
  background-color: ${ELEMENT_BACKGROUND_COLOR};
`;

export const EndButton = styled(VideoButton)`
  background-color: ${DARK_RED};
`;

export const ChatContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 30%;

  row-gap: 15px;

  overflow-y: scroll;

  margin-bottom: 10%;

  &::-webkit-scrollbar {
    width: 0.6em;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${CHAT_BOX_COLOR};
    border-radius: 10px;
  }
`;

export const ChatBox = styled.div`
  width: 100%;
  height: 8%;

  display: flex;

  background-color: ${CHAT_BOX_COLOR};

  border-radius: 30px;

  flex-direction: row;

  align-items: center;

  column-gap: 15px;

  svg {
    fill: ${({ chatLength }) =>
      chatLength === 0 ? CHAT_ICON_COLOR : LIGHT_GREEN};

    cursor: pointer;
  }
`;

export const ChatInput = styled.input`
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  color: ${ELEMENT_TEXT_COLOR};

  padding-left: 15px;

  border: none;

  font-size: 15px;
  background: transparent;

  :focus {
    outline: none;
  }
`;

export const MyVideo = styled.video`
  border-radius: 30px;
  width: ${({ hasPeerJoined }) => (hasPeerJoined ? "40%" : "72%")};
  height: ${({ hasPeerJoined }) => (hasPeerJoined ? "60%" : "100%")};

  transition: all 300ms ease-out;

  object-fit: cover;

  max-width: calc(100%);
  max-height: calc(100%);
`;

export const MyUserNameContainer = styled.div`
  width: ${({ hasPeerJoined }) => (hasPeerJoined ? "40%" : "72%")};
  height: ${({ hasPeerJoined }) => (hasPeerJoined ? "60%" : "100%")};

  transition: all 300ms ease-out;

  background: transparent;

  display: flex;

  align-items: center;
  justify-content: center;

  span {
    font-size: 3rem;
    color: ${TEXT_COLOR};
  }
`;
