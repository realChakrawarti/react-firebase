import { useEffect } from "react";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { firestore as db } from "../../config/firebase";
import PostCard from "./PostCard";

const ShowPosts = ({ posts, setPosts }) => {
  let unsubscribe;
  const getPosts = async () => {
    console.log("Subscribed to real-time database");
    unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      console.log("Receiving data...");
      const postData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPosts(postData);
    });
  };

  const removePost = async (id) => {
    try {
      await deleteDoc(doc(db, `posts/${id}`));
      const filteredPosts = posts.filter((item) => item.id !== id);
      setPosts(filteredPosts);
    } catch (err) {
      console.err(JSON.stringify(err));
    }
  };

  useEffect(() => {
    getPosts();
    return () => {
      console.log("Unsubscribing to real-time database");
      unsubscribe();
    };
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "24px",
      }}
    >
      {posts?.length ? (
        posts.map((item) => (
          <PostCard
            id={item.id}
            key={item.id}
            title={item.title}
            content={item.content}
            removePost={removePost}
          />
        ))
      ) : (
        <h3>No posts found</h3>
      )}
    </main>
  );
};

export default ShowPosts;
