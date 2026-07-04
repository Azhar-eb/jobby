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
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    <Link to="/profile"><button>Profile</button></Link>
                    <Link to="/employer"><button>Employer Dashboard</button></Link>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;