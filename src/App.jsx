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

  const [user, setUser] = useState()

  const handleNavigationRoute = (state) => {
    setRoute({ ...resetRouteState, ...state });
  };

  return (
    <>
      <NavigationLinks user={user} handleRoute={handleNavigationRoute} />

      {!user && route.login && <Login user={user} setUser={setUser} />}
      {route.posts && <PostPage />}
    </>
  );
}

export default App;
