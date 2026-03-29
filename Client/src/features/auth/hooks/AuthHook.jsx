import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { registerUser, loginUser, logoutUser, getUserProfile } from "../services/AuthApi";

export const useAuth = () => {
    const { setUser, user, setLoading, loading } = useContext(AuthContext);

    const handleRegister = async ({ name, email, password }) => {
        try {
            setLoading(true);
            const response = await registerUser({ name, email, password });
            setUser(response.user);

        } catch (error) {
            console.log("registration api call failed ", error);

        } finally {
            setLoading(false);
        }
    }
    const handleLogin = async ({ email, password }) => {

        try {
            setLoading(true);
            const response = await loginUser({ email, password });
            setUser(response.user);
        } catch (error) {
            console.log("login api call failed ", error);

        } finally {
            setLoading(false);
        }
    }
    const handleLogout = async () => {
        try {
            setLoading(true);
            await logoutUser();
            setUser(null);
        } catch (error) {
            console.log("logout api call failed ", error);

        } finally {
            setLoading(false);
        }
    }
    const handleGetProfile = async () => {
        try {
            setLoading(true);
            const response = await getUserProfile();
            setUser(response.user);

        } catch (error) {
            console.log("logout api call failed ", error);

        } finally {
            setLoading(false);
        }
    }

    return { user, loading, handleRegister, handleLogin, handleLogout, handleGetProfile };

}