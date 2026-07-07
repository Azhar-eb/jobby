import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import { MAINROUTES } from "./constants/routes";

function App() {
    return (
        <Routes>
            <Route path={MAINROUTES.HOME} element={<MainLayout><Home /></MainLayout>} />
            <Route path={MAINROUTES.LOGIN} element={<MainLayout><Login /></MainLayout>} />
            <Route path={MAINROUTES.SIGNUP} element={<MainLayout><Signup /></MainLayout>} />
            <Route path={MAINROUTES.EMPLOYER_DASHBOARD} element={<MainLayout><EmployerDashboard /></MainLayout>} />
            <Route path={MAINROUTES.PROFILE} element={<MainLayout><Profile /></MainLayout>} />
            {/* TODO: add the different pages */}
            <Route path={MAINROUTES.JOBS} element={<MainLayout><div>Jobs Page</div></MainLayout>} />
            <Route path={MAINROUTES.CANDIDATES} element={<MainLayout><div>Candidates Page</div></MainLayout>} />
            <Route path={MAINROUTES.ABOUT} element={<MainLayout><About /></MainLayout>} />
        </Routes>
    );
}

export default App;