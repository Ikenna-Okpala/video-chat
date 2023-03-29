import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { ReactComponent as VideoIcon } from "../../assets/video.svg";
import { ReactComponent as MicIcon } from "../../assets/mic.svg";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";
import { ReactComponent as ChatIcon } from "../../assets/chat.svg";
import { ReactComponent as EndIcon } from "../../assets/end.svg";
import { ReactComponent as VideoOffIcon } from "../../assets/video-off.svg";
import { ReactComponent as MicOffIcon } from "../../assets/mic-off.svg";
import {
  ChatBox,
  ChatContent,
  ChatInput,
  ChatWindow,
  DevicesContainer,
  EndButton,
  InvisibleLink,
  MicButton,
  MyUserNameContainer,
  MyVideo,
  RoomBar,
  RoomContainer,
  RoomFooter,
  RowContainer,
  ShareButton,
  VideoButton,
  VideoRow,
  VideoView,
} from "./room.style";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { SocketContext } from "../../context/socket.context";
import Message from "../message/message.component";
import { PeerContext } from "../../context/peer.context";

const createVideoStream = (video, stream, option) => {
  if (video) {
    video.srcObject = stream;
    video.play();

    if (option === "local") {
      video.muted = true;
      video.defaultMuted = true;
    }
  }
};

const Room = () => {
  const { peer } = useContext(PeerContext);

  const { state } = useLocation();
  const { roomId } = state;

  const { username, updateUsername } = useContext(UserContext);
  const { socket } = useContext(SocketContext);

  const navigate = useNavigate();
  const [chatTyped, setChatTyped] = useState("");

  const [messages, setMessages] = useState([]);

  const [isVideoOn, setVideo] = useState(true);

  const [otherUserMedia, setOtherUserMedia] = useState({
    isVideoOn: true,
    isMicOn: true,
  });

  const myVideoRef = useRef(null);

  const [isMicOn, setMic] = useState(true);

  const [hasPeerJoined, setPeerJoined] = useState("");

  const otherUserVideoRef = useRef(null);

  const [otherUsername, setOtherUsername] = useState("");

  const [remoteStream, setRemoteStream] = useState(null);

  //useEffect fires after first render
  const callPeer = (myStream, otherUserId) => {
    const call = peer.call(otherUserId, myStream);

    call.on("stream", (otherUserVideoStream) => {
      setRemoteStream(otherUserVideoStream);
      createVideoStream(otherUserVideoRef.current, otherUserVideoStream);
    });
  };

  const answerPeer = (myStream) => {
    peer.on("call", (call) => {
      setPeerJoined(true);
      call.answer(myStream);
      call.on("stream", (otherUserVideoStream) => {
        setRemoteStream(otherUserVideoStream);
        createVideoStream(otherUserVideoRef.current, otherUserVideoStream);
      });
    });
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((myStream) => {
        createVideoStream(myVideoRef.current, myStream, "local");

        socket.on("user-connected", (otherUsername, otherUserId) => {
          setPeerJoined(true);

          callPeer(myStream, otherUserId);
        });

        answerPeer(myStream);
      });

    if (remoteStream) {
      createVideoStream(otherUserVideoRef.current, remoteStream);
      remoteStream.getAudioTracks()[0].enabled = otherUserMedia.isMicOn;
    }
  }, [isVideoOn, otherUserMedia]);

  useEffect(() => {
    socket.emit("video-state", isVideoOn, isMicOn);
  }, [isVideoOn, isMicOn]);

  useEffect(() => {
    updateUsername(sessionStorage.getItem("username"));

    if (sessionStorage.getItem("reload") === "true") {
      navigate("/");
    }

    const handleOnBeforeReload = (event) => {
      event.preventDefault();
      sessionStorage.setItem("reload", "true");
    };

    window.addEventListener("beforeunload", handleOnBeforeReload);

    return () => {
      sessionStorage.removeItem("reload");
      window.removeEventListener("beforeunload", handleOnBeforeReload);
    };
  }, []);

  socket.on("video-state", (isVideoOn, isMicOn) => {
    setOtherUserMedia({ isVideoOn, isMicOn });
  });

  socket.emit("user-name", username);

  socket.on("user-name", (username) => {
    setOtherUsername(username);
  });

  const toggleVideo = () => {
    //async
    setVideo(!isVideoOn);
  };

  const toggleMic = () => {
    setMic(!isMicOn);
  };

  const onChatTyped = (event) => {
    const { value } = event.target;
    setChatTyped(value);
  };

  const sendMessage = () => {
    if (chatTyped.length > 0) {
      socket.emit("message", chatTyped, username, roomId);
      setChatTyped("");
    }
  };

  socket.on("createMessage", (message, sender) => {
    setMessages([...messages, { sender, message }]);
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const onShareButtonClicked = () => {
    navigator.clipboard.writeText(roomId);

    window.confirm("copied meeting code to clipboard");
  };

  const onEndcallClickedHandler = () => {
    socket.emit("end-call");
    socket.on("disconnect", (reason) => {
      navigate("/home");
    });
  };

  return (
    <RoomContainer>
      <RowContainer>
        <VideoView>
          <VideoRow>
            {isVideoOn ? (
              <MyVideo
                ref={myVideoRef}
                hasPeerJoined={hasPeerJoined}
                isVideoOn={isVideoOn}
              />
            ) : (
              <MyUserNameContainer hasPeerJoined={hasPeerJoined}>
                <span>{username}</span>
              </MyUserNameContainer>
            )}
            {hasPeerJoined &&
              (!otherUserMedia.isVideoOn ? (
                <MyUserNameContainer hasPeerJoined={hasPeerJoined}>
                  <span>{otherUsername}</span>
                </MyUserNameContainer>
              ) : (
                <MyVideo
                  ref={otherUserVideoRef}
                  hasPeerJoined={hasPeerJoined}
                />
              ))}
          </VideoRow>
          <RoomFooter>
            <VideoButton onClick={toggleVideo} on={isVideoOn}>
              {isVideoOn ? <VideoIcon /> : <VideoOffIcon />}
            </VideoButton>

            <MicButton onClick={toggleMic} on={isMicOn}>
              {isMicOn ? <MicIcon /> : <MicOffIcon />}
            </MicButton>

            <ShareButton onClick={onShareButtonClicked}>
              <ShareIcon />
            </ShareButton>

            <EndButton onClick={onEndcallClickedHandler}>
              <EndIcon />
            </EndButton>
          </RoomFooter>
        </VideoView>

        <ChatWindow>
          <ChatContent>
            {messages.map((messageObj) => (
              <Message
                sender={messageObj.sender}
                message={messageObj.message}
              />
            ))}
          </ChatContent>

          <ChatBox chatLength={chatTyped.length}>
            <ChatInput
              value={chatTyped}
              onChange={onChatTyped}
              onKeyDown={handleKeyDown}
            />
            <ChatIcon onClick={sendMessage} />
          </ChatBox>
        </ChatWindow>
      </RowContainer>
    </RoomContainer>
  );
};

export default Room;
