import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import {
  MessageBody,
  MessageContainer,
  MessageHeader,
  MessageParagraph,
} from "./message.style";

const Message = ({ sender, message }) => {
  const { username } = useContext(UserContext);

  return (
    <MessageContainer>
      <MessageHeader>{username === sender ? "You" : sender}</MessageHeader>

      <MessageBody>
        <MessageParagraph>{message}</MessageParagraph>
      </MessageBody>
    </MessageContainer>
  );
};

export default Message;
