import { useState } from "react";
import userPicture from "../../assets/user-profile.webp";
import { auth } from "../../config/firebase";

const NavigationLinks = ({ handleRoute, user }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const { displayName, photoURL } = user || {};

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
          {!user && (
            <button onClick={() => handleRoute({ signup: true })}>
              Signup
            </button>
          )}
          <button onClick={() => handleRoute({ home: true })}>Home</button>
        </div>
        {user && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {displayName ? <p>Welcome, {displayName}</p> : <></>}

            <div onClick={() => setShowProfilePopup((prev) => !prev)}>
              {photoURL ? (
                <img width={32} height={32} alt="profile-pic" src={photoURL} />
              ) : (
                <img
                  width={32}
                  height={32}
                  alt="profile-pic"
                  src={userPicture}
                />
              )}
            </div>
          </div>
        )}
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
