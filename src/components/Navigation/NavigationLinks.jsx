const NavigationLinks = ({ handleRoute }) => {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <button onClick={() => handleRoute({ posts: true })}>Posts</button>
        <button onClick={() => handleRoute({ login: true })}>Login</button>
        <button onClick={() => handleRoute({ home: true })}>Home</button>
      </nav>
    </>
  );
};

export default NavigationLinks;
