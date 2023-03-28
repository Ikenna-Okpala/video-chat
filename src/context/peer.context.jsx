import { createContext, useState } from "react";
import { Peer } from "peerjs";
const peer = new Peer({
  host: "localhost",
  port: "3002",
  path: "/peerjs",
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
