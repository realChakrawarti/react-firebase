import { useState } from "react";

export const PostCard = ({ id, title, content, removePost }) => {
  const [updateStyle, setUpdateStyle] = useState({});

  return (
    <div
      style={{
        display: "flex",
        background: "#eeefff",
        alignItems: "center",
        color: "#00000e",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <div
        onMouseOver={() =>
          setUpdateStyle({ filter: "drop-shadow(1.5px 1.5px red)" })
        }
        onMouseOut={() => setUpdateStyle({})}
        style={{ ...updateStyle, cursor: "pointer" }}
        onClick={() => removePost(id)}
      >
        ❌
      </div>
    </div>
  );
};

export default PostCard;
