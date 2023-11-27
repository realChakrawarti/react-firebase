import { useState } from "react";
import { auth, emailPasswordAuthProvider } from "../../config/firebase";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const [registrationData, setRegistrationData] = useState({
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { rePassword, password, fullname, email } = registrationData;
    if (password !== rePassword)
      throw new Error("Password and Re-password doesn't match!");

    try {
        // Refer: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
      const { user } = await emailPasswordAuthProvider(auth, email, password);

      //Update the profile
      await updateProfile(user, { displayName: fullname });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  return (
    <>
      <h2>Sign-up using Email</h2>

      <div style={{ width: "400px" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="fullname">Fullname: </label>
            <input
              style={{ flexGrow: 1 }}
              onChange={onInputChange}
              name="fullname"
              id="fullname"
              type="text"
              value={registrationData.fullname}
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="email">Email: </label>
            <input
              style={{ flexGrow: 1 }}
              onChange={onInputChange}
              name="email"
              id="email"
              type="email"
              value={registrationData.email}
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="password">Password: </label>
            <input
              style={{ flexGrow: 1 }}
              onChange={onInputChange}
              name="password"
              id="password"
              type="password"
              value={registrationData.password}
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <label htmlFor="rePassword">Re-enter Password: </label>
            <input
              style={{ flexGrow: 1 }}
              onChange={onInputChange}
              name="rePassword"
              id="rePassword"
              type="password"
              value={registrationData.rePassword}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
