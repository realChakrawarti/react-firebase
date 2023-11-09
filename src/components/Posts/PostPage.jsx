import ShowPosts from "./ShowPosts";
import AddPost from "./addPost";
import { useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState();

  return (
    <>
      <AddPost setPosts={setPosts} />
      <ShowPosts posts={posts} setPosts={setPosts} />
    </>
  );
};

export default PostPage;
