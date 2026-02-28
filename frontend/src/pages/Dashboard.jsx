import Layout from "./Layout";

function Dashboard() {
  return (
    <Layout>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4>120</h4>
              <p>Total Jobs</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4>8</h4>
              <p>Applied Jobs</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow">
            <div className="card-body">
              <h4>3</h4>
              <p>Saved Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;