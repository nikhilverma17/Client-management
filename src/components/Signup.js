import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import your CSS file

function Signup() {
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                name,
                email,
                password,
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="signup-container">
        <div className="signup-box">
            <h1>Signup</h1>
            <form action="POST">
                <input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Name"
                />
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password"
                />
                <input type="submit" onClick={submit} />
            </form>
            <div className="separator">
                <p>OR</p>
            </div>
            <Link to="/">Login Page</Link>
        </div>
        </div>
    );
}

export default Signup;
