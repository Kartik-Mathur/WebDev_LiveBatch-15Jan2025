import React from "react";

const Loading = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 16px",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      color: "#555",
    },
    spinner: {
      width: "16px",
      height: "16px",
      border: "3px solid #ccc",
      borderTop: "3px solid #555",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "10px",
    },
    // Inline keyframes via a <style> tag is needed
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        Loading...
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Loading;
