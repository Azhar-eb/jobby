import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { MAINROUTES } from "../../../constants/routes";

function Navbar() {

    const { isAuthenticated, user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">

            <div className="navbar-container">

                <Link to={MAINROUTES.HOME}>
                    <h1 className="logo">JOBBY</h1>
                </Link>

                {isAuthenticated && (
                    <div className="nav-links">
                        <Link to={MAINROUTES.JOBS}>Find Jobs</Link>
                        <Link to={MAINROUTES.CANDIDATES}>Find Candidates</Link>
                        <Link to={MAINROUTES.ABOUT}>About</Link>
                    </div>
                )}

                <div className="navbar-buttons">
                    {isAuthenticated ? (
                        <>
                            <Link to={MAINROUTES.PROFILE}><button>Profile</button></Link>
                            <Link to={MAINROUTES.EMPLOYER}><button>Employer Dashboard</button></Link>
                            <button onClick={logout}>Logout</button>

                        </>
                    ) : (
                        <>
                            <Link to={MAINROUTES.LOGIN}><button>Login</button></Link>
                            <Link to={MAINROUTES.SIGNUP}><button>Sign Up</button></Link>

                        </>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;