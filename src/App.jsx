import { useEffect, useState } from "react";
import "./App.css";
import {collection, getDocs} from "firebase/firestore"
import {firestore as db} from "./config/firebase"

function App() {
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
    event.preventDefault()
    console.log('>>> ',event.target.email.value, ':', event.target.password.value)
  }

  const getPosts = async () => {
    const snapshot = await getDocs(collection(db, 'posts'));
    snapshot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      console.log('id and data',{id, data})
    })
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <h3>Authentication w/ Firebase</h3>

      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
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
        <button type="submit" style={{display: "none"}} />
      </form>
    </>
  );
}

export default App;
