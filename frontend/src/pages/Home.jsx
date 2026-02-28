import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand fw-bold" href="/">JobPortal</a>
        <div className="ms-auto">
          <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
          <Link to="/register" className="btn btn-primary">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <h1 className="display-4 fw-bold">Find Your Dream Job</h1>
        <p className="lead">Thousands of jobs are waiting for you</p>

        <div className="container mt-4">
          <div className="row g-2">
            <div className="col-md">
              <input className="form-control" placeholder="Job Title" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="Location" />
            </div>
            <div className="col-md-auto">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="container py-5">
        <h3 className="mb-4">Featured Jobs</h3>

        <div className="row g-4">
          {[1,2,3,4,5,6].map((job) => (
            <div className="col-md-4" key={job}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Frontend Developer</h5>
                  <p className="card-text text-muted">Company XYZ - Delhi</p>
                  <p>Salary: ₹5-8 LPA</p>
                  <button className="btn btn-outline-primary w-100">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;