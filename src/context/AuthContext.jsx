import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MAINROUTES } from "../constants/routes";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(user);
            setIsAuthenticated(true);
        }
    }, []);


    const login = (user) => {
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(user));
        navigate(MAINROUTES.HOME);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        navigate(MAINROUTES.LOGIN);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}