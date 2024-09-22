import { useState, useEffect } from "react";
import { useSocket } from "../providers/Socket";
const Homepage = () => {
  const { socket } = useSocket();
  // socket.emit("join-room", { roomId: "1", emailId: "a@a.com" });
  const [email, setEmail] = useState();
  const [roomId, setRoomId] = useState();

  const handleRoomJoined = ({ roomId }) => {
    console.log("Room Joined", roomId);
  };

  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
  }, [socket]);
  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId: roomId });
  };
  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email here"
        />
        <input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button onClick={handleJoinRoom}>Enter Room</button>
      </div>
    </div>
  );
};
export default Homepage;
