import { CustomizedButton } from "../button/button.style";
import { ClickableText, HomeContainer, RowContainer } from "./home.style";
import { ReactComponent as NewMeetingIcon } from "../../assets/new-meeting.svg";
import Button from "../button/button.component";
import MeetingRoomInput from "../input/input.component";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import LabelledInput from "../input/input.component";
import { UserContext } from "../../context/userContext";
import { SocketContext } from "../../context/socket.context";
import { Peer } from "peerjs";
import { PeerContext } from "../../context/peer.context";

const Home = () => {
  //refresh page from cached version

  const navigate = useNavigate();

  const { username } = useContext(UserContext);
  const { socket } = useContext(SocketContext);
  const { userId } = useContext(PeerContext);

  const client = axios.create({
    baseURL: "https://vc-chat.glitch.me/",
  });

  const [meetingId, setMeetingId] = useState("");

  const onChange = (event) => {
    const { value } = event.target;

    setMeetingId(value);
  };

  const joinRoom = (roomId) => {
    socket.emit("join-room", roomId, username, userId);
    navigate("/room", { state: { roomId: roomId } });
  };
  const onNewMeetingClicked = () => {
    client
      .get("create-room")
      .then((response) => {
        const { roomId } = response.data.data;

        joinRoom(roomId);
      })
      .catch((error) => console.log(error));
  };

  const onJoinClickedHandler = () => {
    if (meetingId.length > 0) {
      joinRoom(meetingId);
    }
  };

  const onHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      onJoinClickedHandler();
    }
  };

  return (
    <HomeContainer>
      <RowContainer>
        <Button
          Icon={NewMeetingIcon}
          text="New meeting"
          onClick={onNewMeetingClicked}
          size={60}
        />

        <LabelledInput
          value={meetingId}
          onChange={onChange}
          label="Enter a meeting code"
          onKeyDown={onHandleKeyDown}
        />

        <ClickableText length={meetingId.length} onClick={onJoinClickedHandler}>
          Join
        </ClickableText>
      </RowContainer>
    </HomeContainer>
  );
};

export default Home;
