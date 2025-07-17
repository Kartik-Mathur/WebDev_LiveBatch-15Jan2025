import React from "react";

const ErrorMessage = ({ message }) => {
  const styles = {
    container: {
      padding: "12px 16px",
      backgroundColor: "#ffe5e5",
      color: "#d8000c",
      border: "1px solid #d8000c",
      borderRadius: "4px",
      margin: "10px 0",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <strong>Error: </strong>
      {message}
    </div>
  );
};

export default ErrorMessage;
