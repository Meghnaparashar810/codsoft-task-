import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/job")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h3>{job.position}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.workLocation}</p>
          <p>Status: {job.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;