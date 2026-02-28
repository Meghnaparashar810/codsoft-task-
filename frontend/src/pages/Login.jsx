import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>Login</button>

        <p>
          Don’t have account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f8",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "300px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;