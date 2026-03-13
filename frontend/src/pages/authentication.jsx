import React, { useState, useContext } from "react";
import "../styles/authentication.css";
import { AuthContext } from "../contexts/AuthContext";

export default function Authentication() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formState, setFormState] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { handleLogin, handleRegister } = useContext(AuthContext);

  const handleAuth = async () => {
    try {

      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setUsername("");
        setPassword("");
        setName("");
        setFormState(0);
      }

    } catch (err) {
      const msg = err?.response?.data?.message || "Something went wrong";
      setError(msg);
    }
  };

  return (
    <div className="authContainer">

      <div className="authBox">

        <h2>{formState === 0 ? "Login" : "Register"}</h2>

        {formState === 1 && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="error">{error}</p>
        <p className="success">{message}</p>

        <button onClick={handleAuth}>
          {formState === 0 ? "Login" : "Register"}
        </button>

        <p className="toggle">
          {formState === 0 ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => {
              setFormState(formState === 0 ? 1 : 0);
              setError("");
              setMessage("");
            }}
          >
            {formState === 0 ? " Sign Up" : " Sign In"}
          </span>

        </p>

      </div>

    </div>
  );
}