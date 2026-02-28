import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h2>JobPortal</h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f4f6f8" }}>
        {children}
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: "220px",
  background: "#1e293b",
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "20px",
};

export default Layout;