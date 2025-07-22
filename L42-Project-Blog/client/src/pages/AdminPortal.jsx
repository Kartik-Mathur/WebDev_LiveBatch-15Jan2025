import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetchPostsQuery } from "../services/api";
import Loader from "../components/Loader";

const AdminPortal = () => {
  const { data, isLoading, isError } = useFetchPostsQuery();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleDelete = (id) => {
    // Add delete logic here
    console.log("Delete post with ID:", id);
  };

  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    },
    newButton: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "20px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#f9f9f9",
      marginBottom: "10px",
      padding: "15px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    title: {
      margin: 0,
      fontWeight: "bold",
      flex: 1,
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    editButton: {
      backgroundColor: "#2196F3",
      color: "white",
    },
    deleteButton: {
      backgroundColor: "#f44336",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.newButton} onClick={() => navigate("/admin/new")}>
        NEW
      </button>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error loading posts.</p>
      ) : (
        <ul style={styles.list}>
          {data.map((p, i) => (
            <li key={i} style={styles.listItem}>
              <p style={styles.title}>{p.title}</p>
              <div style={styles.buttons}>
                <button
                  style={{ ...styles.button, ...styles.editButton }}
                  onClick={() => navigate(`/admin/edit/${p.id}`)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.button, ...styles.deleteButton }}
                  onClick={() => navigate(`/admin/delete/${p.id}`)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPortal;
