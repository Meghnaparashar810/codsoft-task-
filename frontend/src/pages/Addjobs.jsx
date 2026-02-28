import { useState } from "react";
import axios from "axios";

function AddJob() {
  const [job, setJob] = useState({
    company: "",
    position: "",
    workType: "",
    workLocation: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/job", job);
      alert("Job Added Successfully");
    } catch (error) {
      alert("Failed to Add Job");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="company" placeholder="Company Name" onChange={handleChange} required /><br /><br />
        <input name="position" placeholder="Position" onChange={handleChange} required /><br /><br />

        <select name="workType" onChange={handleChange}>
          <option value="">Select Work Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="intership">Internship</option>
          <option value="contract">Contract</option>
        </select><br /><br />

        <input name="workLocation" placeholder="Location" onChange={handleChange} required /><br /><br />

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;