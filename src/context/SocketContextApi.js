import { getSocketEndpoint } from "@/config/envConfig";
import { selectToken } from "@/redux/features/auth/authSlice";
import { createContext, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { toast } from "sonner";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socketLoading, setSocketLoading] = useState(false);
  const token = useSelector(selectToken);
  const [chatIdFromSocket, setChatIdFromSocket] = useState(null);

  const socket = useMemo(() => {
    setSocketLoading(true);

    if (token) {
      const socketStore = io(getSocketEndpoint(), {
        transports: ["websocket"],
        auth: {
          token,
        },
      });

      socketStore.on("connect", () => {
        setSocketLoading(false);
      });

      return socketStore;
    }
  }, [token]);

  return (
    <SocketContext.Provider
      value={{ socket, socketLoading, setChatIdFromSocket, chatIdFromSocket }}
    >
      {children}
    </SocketContext.Provider>
  );
};
