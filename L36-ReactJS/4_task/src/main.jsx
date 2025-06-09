import { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function DisplayTopics({ topics }) {}

function App() {
  const topics = ["Array", "LinkedList", "Stack", "Queues"];
  const [selectedTopics, setSelectedTopics] = useState([]);

  return (
    <div>
      {topics.map((t, indx) => {
        return (
          <div key={indx}>
            <input
              type="checkbox"
              value={t}
              onChange={(ev) => {
                let isPresentAlready = selectedTopics.includes(ev.target.value);
                if (isPresentAlready) {
                  setSelectedTopics((prevTopics) => {
                    return prevTopics.filter(
                      (topic) => topic !== ev.target.value
                    );
                  });
                } else {
                  setSelectedTopics([...selectedTopics, ev.target.value]);
                }
              }}
            />{" "}
            {t}
          </div>
        );
      })}

      <h1>Topics Selected: </h1>
      <div>
        {selectedTopics.map((t, indx) => {
          return <li key={indx}>{t}</li>;
        })}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
