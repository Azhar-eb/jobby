import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { MAINROUTES } from "../../constants/routes";

function Login() {

    const { login, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
        password: "",
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


    useEffect(() => {
        if (isAuthenticated) {
            navigate(MAINROUTES.HOME);
        }
    }, [isAuthenticated, navigate]);


    return (
        <div className="auth-container">

            <h2>Welcome Back</h2>

            <form onSubmit={handleFromSubmit}>
                <input type="email" placeholder="Email" onChange={(e) => handleInputChange(e, "email")} />
                <input type="password" placeholder="Password" onChange={(e) => handleInputChange(e, "password")} />

                <button className="primary-btn">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;