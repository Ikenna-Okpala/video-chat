import { createContext } from "react";
import { io } from "socket.io-client";
const socket = io("https://vc-chat.glitch.me/");

export const SocketContext = createContext({
  socket: socket,
});

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
