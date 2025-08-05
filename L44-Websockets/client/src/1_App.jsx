import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const inpRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = function ({ data }) {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
  }, []);

  function sendChat() {
    const myMessage = inpRef.current.value;
    if (myMessage.trim() === "") return;

    socket.send(myMessage);
    inpRef.current.value = ""; // Clear input after sending
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Chat App</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          ref={inpRef}
          type="text"
          placeholder="Enter Text.."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendChat}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          maxHeight: "300px",
          overflowY: "auto",
          borderTop: "1px solid #eee",
        }}
      >
        {messages.map((d, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#e0f7fa",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              wordWrap: "break-word",
            }}
          >
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
