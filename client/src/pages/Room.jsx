import { useSocket } from "../providers/Socket";
import { usePeer } from "../providers/Peer";
import { useEffect, useCallback } from "react";

const RoomPage = () => {
  const { socket } = useSocket();
  const { peer, createOffer } = usePeer();

  const handleNewUserJoined = useCallback(
    async (data) => {
      const { emailId } = data;
      console.log("new user joined room", emailId);
      const offer = await createOffer();
      socket.emit("call-user", { emailId, offer });
    },
    [createOffer, socket]
  );

  const handleIncommingCall = useCallback((data) => {
    const { from, offer } = data;
    console.log("Incooming Call from", from, offer);
  }, []);

  useEffect(() => {
    socket.on("user-joined", handleNewUserJoined);
    socket.on("incomming-call", handleIncommingCall);
  }, [handleNewUserJoined, handleIncommingCall, socket]);

  return (
    <div className="room-page-container">
      <h1>Room page</h1>
    </div>
  );
};

export default RoomPage;
