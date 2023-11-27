import { useState } from "react";

const EmailPassword = ({ signInWithEmailPassword }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password)
      throw new Error("Either email or password is empty.");

    signInWithEmailPassword(email, password);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email">Email: </label>
        <input
          required
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          required
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default EmailPassword;
