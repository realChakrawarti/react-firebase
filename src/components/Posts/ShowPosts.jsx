import { useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { firestore as db } from "../../config/firebase";
import PostCard from "./PostCard";

const ShowPosts = ({ posts, setPosts }) => {
  const getPosts = async () => {
    const snapshot = await getDocs(collection(db, "posts"));

    const postData = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setPosts(postData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
      {posts?.length ? (
        posts.map((item) => (
          <PostCard key={item.id} title={item.title} content={item.content} />
        ))
      ) : (
        <h3>No posts found</h3>
      )}
    </main>
  );
};

export default ShowPosts;
