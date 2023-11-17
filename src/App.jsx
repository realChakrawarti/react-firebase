import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Authenticate/Login";
import NavigationLinks from "./components/Navigation/NavigationLinks";
import PostPage from "./components/Posts/PostPage";
import { auth } from "./config/firebase";

const resetRouteState = {
  home: false,
  posts: false,
  login: false,
};

let unsubscribeFromAuth;

function App() {
  const [route, setRoute] = useState({
    home: true,
    posts: false,
    login: false,
  });

  const [user, setUser] = useState();

  const getLoginState = async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log("Receiving authentication state...");
      setUser(user);
    });
    console.log("Subscribed to authentication state");
  };

  useEffect(() => {
    getLoginState();

    return () => {
      unsubscribeFromAuth();
      console.log("Unsubscribing from authentication state");
    };
  }, []);

  const handleNavigationRoute = (state) => {
    setRoute({ ...resetRouteState, ...state });
  };

  return (
    <>
      <NavigationLinks user={user} handleRoute={handleNavigationRoute} />

      {!user && route.login && <Login user={user} />}
      {route.posts && <PostPage />}
    </>
  );
}

export default App;
