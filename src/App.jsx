import { useState } from "react";
import "./App.css";
import Login from "./components/Authenticate/Login";
import NavigationLinks from "./components/Navigation/NavigationLinks";
import PostPage from "./components/Posts/PostPage";

const resetRouteState = {
  home: false,
  posts: false,
  login: false,
};

function App() {
  const [route, setRoute] = useState({
    home: true,
    posts: false,
    login: false,
  });

  const handleNavigationRoute = (state) => {
    setRoute({ ...resetRouteState, ...state });
  };

  return (
    <>
      <NavigationLinks handleRoute={handleNavigationRoute} />

      {route.login && <Login />}
      {route.posts && <PostPage />}
    </>
  );
}

export default App;
