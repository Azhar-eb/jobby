import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import Profile from "./pages/Profile/Profile";
function App() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout><Home /></MainLayout>} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobs" element={<div>Jobs Page</div>} />
            <Route path="/candidates" element={<div>Candidates Page</div>} />

        </Routes>
    );
}

export default App;