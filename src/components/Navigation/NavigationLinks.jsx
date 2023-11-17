import { useState } from "react";
import { auth } from "../../config/firebase";

const NavigationLinks = ({ handleRoute, user }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <nav style={{ display: "flex" }}>
        <div style={{ display: "flex", flexGrow: "1", gap: "15px" }}>
          {user && (
            <button onClick={() => handleRoute({ posts: true })}>Posts</button>
          )}
          {!user && (
            <button onClick={() => handleRoute({ login: true })}>Login</button>
          )}
          <button onClick={() => handleRoute({ home: true })}>Home</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user?.displayName ? <p>Welcome, {user.displayName}</p> : <></>}
          {user?.photoURL ? (
            <div onClick={() => setShowProfilePopup((prev) => !prev)}>
              <img
                width={32}
                height={32}
                alt="profile-pic"
                src={user.photoURL}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {showProfilePopup ? (
          <div
            style={{
              width: "200px",
              height: "80px",
              position: "absolute",
              right: "0px",
              top: "50px",
            }}
          >
            <button
              onClick={() => {
                auth.signOut();
                setShowProfilePopup(false);
                handleRoute({ home: true });
              }}
              style={{ position: "absolute", right: "0px" }}
            >
              Logout
            </button>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default NavigationLinks;
