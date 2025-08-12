import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const inpRef = useRef();
  const [messages, setMessages] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("general");
  const allRooms = ["general", "cpp", "java"];
  const colors = ["#007bff", "#28a745", "#ffc107"];
  const messagesEndRef = useRef(null);

  useEffect(() => {
    let ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = function ({ data }) {
      setMessages((prevMessages) => [...prevMessages, data]); // Append to bottom
    };
  }, []);

  function sendChat() {
    const myMessage = inpRef.current.value;
    if (myMessage.trim() === "") return;

    socket.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: myMessage,
          room: currentRoom,
        },
      })
    );
    inpRef.current.value = "";
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
        position: "relative",
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
          textTransform: "capitalize",
        }}
      >
        {currentRoom}
      </h2>

      {/* Message list */}
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0 0 10px 0",
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column-reverse", // Show new messages at bottom
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
        }}
      >
        {[...messages].reverse().map((d, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#e0f7fa",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
              wordWrap: "break-word",
              fontSize: "15px",
              color: "#333",
            }}
          >
            {d}
          </li>
        ))}
      </ul>

      {/* Input + Send Button at Bottom */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input
          ref={inpRef}
          type="text"
          placeholder="Enter Text..."
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendChat();
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

      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          position: "absolute",
          top: "20px",
          left: "-250px",
          border: "1px solid #ccc",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "10px",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
          borderRadius: "8px",
        }}
      >
        <h3
          style={{
            marginBottom: "10px",
            fontSize: "18px",
            color: "#333",
            textAlign: "center",
          }}
        >
          Rooms
        </h3>
        {allRooms.map((r, i) => {
          return (
            <button
              key={i}
              style={{
                marginBottom: "10px",
                padding: "10px",
                fontSize: "14px",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
                backgroundColor: `${colors[i]}`,
                color: "#fff",
                transition: "background-color 0.2s",
                textTransform: "uppercase",
                fontWeight: r === currentRoom ? "bold" : "normal",
                opacity: r === currentRoom ? 1 : 0.85,
              }}
              onClick={() => {
                setCurrentRoom(r);
                setMessages([]);
                socket.send(
                  JSON.stringify({
                    type: "joinroom",
                    payload: {
                      room: `${r}`,
                    },
                  })
                );
              }}
            >
              {r}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
