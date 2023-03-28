import { createContext } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

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