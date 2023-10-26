import { useState, useEffect } from "react"; 

import { collection, getDocs } from "firebase/firestore";
import { firestore as db } from "../../config/firebase";

const ShowPosts = () => {
  const [posts, setPosts] = useState();

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

  return <>{JSON.stringify(posts, null, 2)}</>;
};

export default ShowPosts;
