import React, { useEffect, useState } from "react";
import { useFetchPostsQuery, useFetchTagsQuery } from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { data: posts = [], isLoading: postsLoading } = useFetchPostsQuery();
  const { data: tags = [] } = useFetchTagsQuery();
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.some((tag) => tag.name === selectedTag))
    : posts;

  const styles = {
    wrapper: {
      maxWidth: "960px",
      margin: "2rem auto",
      padding: "0 1rem",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
    tagBar: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginBottom: "2rem",
    },
    tagButton: (active) => ({
      padding: "8px 16px",
      borderRadius: "20px",
      background: active ? "#000" : "#f0f0f0",
      color: active ? "#fff" : "#000",
      border: "none",
      cursor: "pointer",
      fontWeight: 500,
    }),
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      padding: "1rem",
      marginBottom: "1rem",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
    cardLeft: {
      flex: 1,
      paddingRight: "1rem",
    },
    cardRight: {
      width: "140px",
      height: "90px",
      borderRadius: "8px",
      overflow: "hidden",
      objectFit: "cover",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "0.3rem",
    },
    content: {
      fontSize: "0.95rem",
      color: "#555",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    meta: {
      fontSize: "0.85rem",
      color: "#888",
      marginTop: "0.5rem",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.tagBar}>
        <button
          style={styles.tagButton(!selectedTag)}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag.id}
            style={styles.tagButton(selectedTag === tag.name)}
            onClick={() => setSelectedTag(tag.name)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      {postsLoading ? (
        <p>Loading posts...</p>
      ) : (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            style={styles.card}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <div style={styles.cardLeft}>
              <div style={styles.title}>{post.title}</div>
              <div style={styles.content}>{post.content}</div>
              <div style={styles.meta}>
                By {post.author?.username || "Unknown"}
              </div>
            </div>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="preview" style={styles.cardRight} />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
