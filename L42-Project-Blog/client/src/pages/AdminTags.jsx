import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminTags = () => {
  const [tag, setTag] = useState("");
  const [allTags, setAllTags] = useState([]);

  const fetchTags = async () => {
    try {
      const res = await fetch("http://localhost:4444/api/tags");
      const data = await res.json();
      setAllTags(data);
    } catch (err) {
      toast.error("Failed to load tags");
    }
  };

  const deleteTag = async (id) => {
    try {
      const res = await fetch(`http://localhost:4444/api/tags/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (result.ok) {
        // setTag("");
        fetchTags();
        toast.success("Tag deleted successfully");
      } else {
        const err = await res.json();
        toast.error(err.message || "Error adding tag");
      }
    } catch (error) {
      toast.error("");
    }
  };

  const handleAddTag = async () => {
    if (!tag.trim()) return toast.error("Tag name required");

    try {
      const res = await fetch("http://localhost:4444/api/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: tag }),
      });
      if (res.ok) {
        setTag("");
        fetchTags();
        toast.success("Tag added");
      } else {
        const err = await res.json();
        toast.error(err.message || "Error adding tag");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  React.useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Add New Tag</h2>
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter tag name"
        style={{ padding: "10px", width: "100%", marginBottom: "1rem" }}
      />
      <button
        onClick={handleAddTag}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Add Tag
      </button>

      <h3 style={{ marginTop: "2rem" }}>Existing Tags:</h3>
      <ul>
        {allTags.length > 0 ? (
          allTags.map((t) => (
            <li key={t.id}>
              {t.name} <button onClick={() => deleteTag(t.id)}>❌</button>
            </li>
          ))
        ) : (
          <div>No Tags Created Yet</div>
        )}
      </ul>
    </div>
  );
};

export default AdminTags;
