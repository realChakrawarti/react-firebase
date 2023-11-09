import { useState } from "react";
import { collection, addDoc, getDoc } from "firebase/firestore";
import { firestore as db } from "../../config/firebase";

const initialFormData = {
    title: "",
    content: "",
  }

const AddPost = ({ setPosts }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (event) => {
    const field = event.target;

    const newData = { [field.name]: field.value };
    setFormData({ ...formData, ...newData });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "posts"), formData);
        const doc = await getDoc(docRef)
        const newPost = { id: docRef.id, ...doc.data() };
        setPosts((prev) => [newPost, ...prev]);
        setFormData(initialFormData)
    } catch (err) {
        console.error(JSON.stringify(err))
    }
  };

  return (
    <>
      <h3>Add Post</h3>

      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Title: </label>
          <input
            required
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <input
            required
            type="text"
            name="content"
            value={formData.content}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" style={{ display: "none" }} />
      </form>
    </>
  );
};

export default AddPost;
