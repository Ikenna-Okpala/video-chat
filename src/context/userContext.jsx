import { createContext, useState } from "react";

export const UserContext = createContext({
  username: "",
  setUsername: () => {},
});

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const value = { username, updateUsername };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
