import { useState } from "react";
import API from "../api";
import Layout from "./Layout.jsx";

function Profile() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put("/profile", form);
      alert("Profile Updated Successfully");
    } catch (err) {
      alert("Update Failed");
    }
  };

  return (
    <Layout>
      <h2>Update Profile</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="fullname" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />

        <button>Update</button>
      </form>
    </Layout>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "400px",
};

export default Profile;