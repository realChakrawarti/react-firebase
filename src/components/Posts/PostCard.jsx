import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore as db } from "../../config/firebase"

export const PostCard = ({ id, title, content }) => {
  const [updateStyle, setUpdateStyle] = useState({});

  const removePost = async (id) => {
    try {
      await deleteDoc(doc(db, `posts/${id}`));
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

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
