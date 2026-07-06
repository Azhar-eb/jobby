import "./Auth.css";

function Signup() {
    return (
        <div className="auth-container">
            
                <h1>Signup Page</h1>
           
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="primary-btn">
                    Login
                </button>
            
        </div>
    );
}
export default Signup;