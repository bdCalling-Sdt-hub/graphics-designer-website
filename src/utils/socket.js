import { selectUser } from "@/redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export const socket = io("http://159.223.184.53:1001", {
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
  transports: ["websocket"],
  auth: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmViYWVlNjBlMmYwNTRjNWI0NjhiNDkiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyNjg5MjQ3NywiZXhwIjoxNzI5NDg0NDc3fQ.Q4bt1MgHsA4vVVnvt9_nGt_KW7aKJ8CnixkjPCDZNFA",
  },
});
