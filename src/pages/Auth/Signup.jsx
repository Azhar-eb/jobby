import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MAINROUTES } from "../../constants/routes";
import "./Auth.css";

function Signup() {
    const { login, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(MAINROUTES.HOME);
        }
    }, [isAuthenticated, navigate]);


    const [user, setUser] = useState({
        email: "",
        password: "",
        userName: ""
    })

    const handleFromSubmit = (e) => {
        e.preventDefault()
        login(user);
    }

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        setUser({
            ...user,
            [field]: value
        })
    }

    return (
        <div className="auth-container">

            <h1>Signup Page</h1>

            <form onSubmit={handleFromSubmit}>
                <input type="text" placeholder="Your Name" onChange={(e) => handleInputChange(e, "userName")} />
                <input type="email" placeholder="Email" onChange={(e) => handleInputChange(e, "email")} />
                <input type="password" placeholder="Password" onChange={(e) => handleInputChange(e, "password")} />

                <button className="primary-btn" type="submit">
                    Sign Up
                </button>
            </form>

        </div>
    );
}
export default Signup;