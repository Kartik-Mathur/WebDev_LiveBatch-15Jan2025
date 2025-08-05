import React from "react";
import { useState } from "react";
import ChatApp from "./pages/ChatApp";

const App = () => {
  const [userName, setUserName] = useState("");
  const [socket, setSocket] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  function joinChatRoom() {
    setLoggedIn(true);
    socket.send({
      type: "joinChatRoom",
      payload: {
        name: userName,
      },
    });
  }

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = function ({ data }) {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
  }, []);

  return (
    <div>
      {!loggedIn ? (
        <>
          <input
            onChange={(ev) => setUserName(ev.target.value)}
            type="text"
            placeholder="Enter name to chat.../"
          />
          <button onClick={joinChatRoom}>Join chat</button>
        </>
      ) : (
        <ChatApp userName={userName} socket={socket} />
      )}
    </div>
  );
};

export default App;
