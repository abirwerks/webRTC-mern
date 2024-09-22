import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";
import { PeerProvider } from "./providers/Peer";
import RoomPage from "./pages/Room";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SocketProvider>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/home" element={<h1>Home two</h1>}></Route>
            <Route path="/room/:roomId" element={<RoomPage />}></Route>
          </Routes>
        </PeerProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
