import { useMemo, useContext, createContext } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext(null);

export const SocketProvider = (props) => {
  const socket = useMemo(() => io("http://localhost:8001"), []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
export const useSocket = () => {
  return useContext(SocketContext);
};
