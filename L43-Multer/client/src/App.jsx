import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [imgData, setImgData] = useState();

  function handleFile(e) {
    const reader = new FileReader();
    // console.log(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      console.log("DONE");
      setImgData(reader.result);
      console.log(reader.result);
    };
  }

  function submitForm() {
    const formdata = new FormData();
    formdata.append("img", imgData);
    axios({
      method: "post",
      url: "http://localhost:4444/",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  return (
    <div>
      <input type="file" onChange={handleFile} />
      <br />
      <img
        style={{
          height: "300px",
        }}
        src={imgData}
        alt="Uploaded image by user"
      />
      <br />
      <button onClick={submitForm}>Submit Form</button>
    </div>
  );
};

export default App;
