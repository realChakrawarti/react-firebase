import PostCard from "./PostCard";

const ShowPosts = ({ posts }) => {
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
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <h3>No posts found</h3>
      )}
    </main>
  );
};

export default ShowPosts;
