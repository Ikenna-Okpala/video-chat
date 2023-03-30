import { createContext, useState } from "react";
import { Peer } from "peerjs";
const peer = new Peer({
  host: "vc-chat-peer-server.glitch.me",
  path: "/peerjs",
  secure: true,
});

export const PeerContext = createContext({
  peer,
  userId: "",
});

export const PeerProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  peer.on("open", (id) => {
    setUserId(id);
  });

  return (
    <PeerContext.Provider value={{ peer, userId }}>
      {children}
    </PeerContext.Provider>
  );
};
