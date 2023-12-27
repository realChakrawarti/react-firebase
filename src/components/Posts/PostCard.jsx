import { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, firestore as db } from "../../config/firebase";

export const PostCard = ({ id, title, content, favorite, user }) => {
  const [updateStyle, setUpdateStyle] = useState({});

  const currentUser = auth.currentUser;

  const docRef = doc(db, `posts/${id}`);

  // Refer: https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
  const removePost = async () => {
    try {
      await deleteDoc(docRef);
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  // Refer: https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
  const updateFavorite = async () => {
    try {
      await updateDoc(docRef, {
        favorite: !favorite,
      });
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
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
      <div style={{ cursor: "pointer" }} onClick={updateFavorite}>
        {favorite ? "❤️" : "🖤"}
      </div>
      {/* Show delete button only when {user.uid} matches the {currentUser.uid} */}
      {user.uid === currentUser.uid && (
        <div
          onMouseOver={() =>
            setUpdateStyle({ filter: "drop-shadow(1.5px 1.5px red)" })
          }
          onMouseOut={() => setUpdateStyle({})}
          style={{ ...updateStyle, cursor: "pointer" }}
          onClick={removePost}
        >
          ❌
        </div>
      )}
    </div>
  );
};

export default PostCard;
