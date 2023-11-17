import { useState } from "react";
import EmailPassword from "./EmailPassword";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase";

const Login = ({user, setUser}) => {
  const [loginMode, setLoginMode] = useState("email");

  const signInWithGoogle = async () => {
    try {
    const data = await signInWithPopup(auth, googleAuthProvider);
    setUser(data.user)
    } catch (err){
      console.error(JSON.stringify(err));
    }
  };

  return (
    <>
      <h3>Authentication w/ Firebase</h3>
      <div>
        <input
          type="radio"
          onChange={(e) => setLoginMode(e.target.value)}
          checked={loginMode === "email"}
          name="loginMode"
          id="loginWithEmail"
          value="email"
        />
        <label htmlFor="loginWithEmail">Login in with Email & Password</label>
      </div>
      <div>
        <input
          type="radio"
          onChange={(e) => setLoginMode(e.target.value)}
          checked={loginMode === "google"}
          name="loginMode"
          id="loginWithGoogle"
          value="google"
        />
        <label htmlFor="loginWithGoogle">Login in with Google</label>
      </div>

      {loginMode === "email" ? (
        <EmailPassword />
      ) : (
        <button onClick={signInWithGoogle}>Login with Google</button>
      )}
    </>
  );
};

export default Login;
