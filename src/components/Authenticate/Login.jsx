import { useState } from "react";
import EmailPassword from "./EmailPassword";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthProvider } from "../../config/firebase";

const Login = () => {
  const [loginMode, setLoginMode] = useState("email");

  const signInWithEmailPassword = async (email, password) => {
    try {
      // Refer: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error(JSON.stringify(err));
    }
  };

  return (
    <>
      <h2>Authentication w/ Firebase</h2>
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
        <EmailPassword signInWithEmailPassword={signInWithEmailPassword} />
      ) : (
        <button onClick={signInWithGoogle}>Login with Google</button>
      )}
    </>
  );
};

export default Login;
