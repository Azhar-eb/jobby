import "./Auth.css";

function Login() {
    return (
        <div className="auth-container">

            <h2>Welcome Back</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="primary-btn">
                Login
            </button>

        </div>
    );
}

export default Login;