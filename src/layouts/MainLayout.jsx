import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { MAINROUTES, unprotectedRoutes } from "../constants/routes";


function MainLayout({ children }) {
    const { isAuthenticated, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const currentPath = window.location.pathname;


    useEffect(() => {
        const isUnprotectedRoute = unprotectedRoutes.includes(currentPath);
        if (!isAuthenticated && !isUnprotectedRoute) {
            navigate(MAINROUTES.LOGIN);
        }
    }, [isAuthenticated, navigate, currentPath]);
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;