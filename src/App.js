import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client"

// const socket = socketIO.connect("http://localhost:3031")
const socket = socketIO.connect('http://realtime-chat-backend-v2.snap-gw.ramaoding.com');
function App() {
  const [isFromLogin, setIsFromLogin] = useState(false)
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home socket={socket} setIsFromLogin={setIsFromLogin} />}></Route>
            <Route path="/chat" element={<ChatPage socket={socket} isFromLogin={isFromLogin} />}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
