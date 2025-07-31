import React, { useState } from "react";
// import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation, useFetchTagsQuery } from "../services/api";

const NewPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [createPost, { isLoading: isSubmitting }] = useCreatePostMutation();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { data: tags = [], isLoading: tagsLoading } = useFetchTagsQuery();

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleTag = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleChange = ({ target: { name, value } }) =>
    setForm((prevData) => ({ ...prevData, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("tagIds", JSON.stringify(selectedTags));
    if (image) {
      formData.append("file", image);
    }

    try {
      await createPost(formData);
      navigate("/admin");
    } catch (err) {
      navigate("/admin/new");
      console.error("Failed to create post:", err);
    }
    /* // This is before image data
    await createPost({ content: form.content, title: form.title });
    navigate("/admin");
    */
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "85vh",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f6f8",
    },
    form: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    heading: {
      marginBottom: "1rem",
      textAlign: "center",
      color: "#333",
    },
    input: {
      padding: "12px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "border-color 0.3s",
    },
    textarea: {
      padding: "12px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      outline: "none",
      resize: "vertical",
      height: "150px",
      transition: "border-color 0.3s",
    },
    fileInput: {
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      backgroundColor: "#fdfdfd",
    },
    imagePreview: {
      width: "100%",
      height: "auto",
      borderRadius: "6px",
      marginTop: "10px",
      objectFit: "cover",
    },
    button: {
      padding: "12px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    tagSection: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    tagList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    tagItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>📝 Add a New Post</h2>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          value={form.title}
          placeholder="Enter Title"
          style={styles.input}
          required
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={form.content}
          placeholder="Enter Content"
          style={styles.textarea}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.fileInput}
        />

        {preview && (
          <img src={preview} alt="Preview" style={styles.imagePreview} />
        )}

        {tagsLoading ? (
          <p>Loading tags...</p>
        ) : (
          <div style={styles.tagSection}>
            <p style={{ fontWeight: "bold" }}>Select Tags:</p>
            <div style={styles.tagList}>
              {tags.map((tag) => (
                <label key={tag.id} style={styles.tagItem}>
                  <input
                    type="checkbox"
                    value={tag.id}
                    checked={selectedTags.includes(tag.id)}
                    onChange={() => toggleTag(tag.id)}
                  />
                  {tag.name}
                </label>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: isSubmitting ? "#6c757d" : "#007bff",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default NewPost;
