import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/style.css"; 

export default function Login() {
    let [name, setName] = useState("");
    let [pass, setPass] = useState("");

    function submitform(event) {
        event.preventDefault();

        const storeditem1 = sessionStorage.getItem("name");
        const storeditem2 = sessionStorage.getItem("pass");

        if (storeditem1 === name && storeditem2 === pass) {
            alert("Login Successful");
            window.location.href = "/"; // Redirects to the main page in the same tab
        } else {
            alert("Invalid username or password.");
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h1 className="login-logo">YourStyle Hub</h1>
                <p className="login-subtitle">Welcome back! Please log in.</p>
                <form className="login-form" onSubmit={submitform}>
                    <div className="input-group">
                        <label htmlFor="loginName" className="form-label">Name</label>
                        <input
                            type="text"
                            id="loginName"
                            className="form-input"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            id="loginPassword"
                            className="form-input"
                            placeholder="Enter your password"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="login-footer">
                    Don't have an account? <Link to="/signinpage" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
