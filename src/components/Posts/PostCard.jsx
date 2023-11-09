export const PostCard = ({ title, content }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        background: "#eeefff",
        color: "#00000e",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default PostCard;
