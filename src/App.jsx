import { useState } from "react";
import "./App.css";
import Login from "./components/Authenticate/Login";
import ShowPosts from "./components/Posts/ShowPosts";
import NavigationLinks from "./components/Navigation/NavigationLinks";

const resetRouteState = {
  home: false,
  showPosts: false,
  addPost: false,
  login: false,
};

function App() {
  const [route, setRoute] = useState({
    home: true,
    showPosts: false,
    addPost: false,
    login: false,
  });

  const handleNavigationRoute = (state) => {
    setRoute({ ...resetRouteState, ...state });
  };

  return (
    <>
      <NavigationLinks handleRoute={handleNavigationRoute} />

      {route.login && <Login />}
      {route.showPosts && <ShowPosts />}
      {route.addPost && <>Add Post Placeholder</>}
    </>
  );
}

export default App;
