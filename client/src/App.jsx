import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<h1>Home two</h1>}></Route>
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
