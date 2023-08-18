import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRouts } from "./PrivateRouts";
import { PublicRoutes } from "./PublicRouts";


export const RoutesMain = () => {
    
    return(
        <Routes>
            <Route element= {<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element= {<PrivateRouts />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}