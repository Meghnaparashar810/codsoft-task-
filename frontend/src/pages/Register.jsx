import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/api/auth/register", {
                fullname: name,
                email,
                password,
            });

            navigate("/");
        } catch (err) {
            alert("Register Failed");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.card}>
                <h2>Register</h2>

                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />

                <button style={styles.button}>Register</button>

                <p>
                    Already have account? <Link to="/">Login</Link>
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
        background: "#2196F3",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
};

export default Register;