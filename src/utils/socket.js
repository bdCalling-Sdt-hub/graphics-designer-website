import { io } from "socket.io-client";

export const socket = io("http://159.223.184.53:1001", {
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5,
  transports: ["websocket"],
  auth: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmVkOTRjMGFhODBkNzEyMjFkMGM5M2MiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyNjg0NjE5MSwiZXhwIjoxNzI5NDM4MTkxfQ.FjzD2fe6OrbXQ6fqGjcY8TB6IdgkcHoMRfMNahZTPuU",
  },
});
