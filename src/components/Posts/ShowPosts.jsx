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
            id={item.id}
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))
      ) : (
        <h3>No posts found</h3>
      )}
    </main>
  );
};

export default ShowPosts;
