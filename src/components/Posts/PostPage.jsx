import ShowPosts from "./ShowPosts";
import AddPost from "./addPost";
import { useState } from "react";
import { useEffect } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { firestore as db } from "../../config/firebase";

let unsubscribeFromStore;

const PostPage = () => {
  const [posts, setPosts] = useState();

  // Refer: https://firebase.google.com/docs/firestore/query-data/listen
  const getPosts = async () => {
    console.log("Subscribed to real-time database");
    unsubscribeFromStore = onSnapshot(collection(db, "posts"), (snapshot) => {
      console.log("Receiving data...");
      const postData = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPosts(postData);
    });
  };

  useEffect(() => {
    getPosts();
    return () => {
      console.log("Unsubscribing to real-time database");
      unsubscribeFromStore();
    };
  }, []);

  return (
    <>
      <AddPost />
      <ShowPosts posts={posts} />
    </>
  );
};

export default PostPage;
