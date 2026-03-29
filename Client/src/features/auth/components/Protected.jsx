import {useAuth} from "../hooks/AuthHook";
import { Navigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

export const Protected = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingPage />;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};