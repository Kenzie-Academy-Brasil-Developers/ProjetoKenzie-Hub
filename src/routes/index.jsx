import { Route, Routes, useNavigate } from "react-router-dom";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";


export const RoutesMain = () => {
    const [user, setUser] = useState(null)

    const navigation = useNavigate()

    const Logout = () => {
        setUser(null);
        navigation("/");
        localStorage.removeItem("@TOKEN");
    }

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard user={user} Logout={Logout} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}