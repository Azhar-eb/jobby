import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-container">

                <h1 className="logo">JOBBY</h1>

                <div className="nav-links">
                    <Link to="/jobs">Find Jobs</Link>
                    <Link to="/candidates">Find Candidates</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="navbar-buttons">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/employer">Employer Dashboard</Link>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;