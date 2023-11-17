import { useState } from "react";

const EmailPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const field = event.target;

    const newData = { [field.name]: field.value };
    setFormData({ ...formData, ...newData });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      ">>> ",
      event.target.email.value,
      ":",
      event.target.password.value
    );
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
