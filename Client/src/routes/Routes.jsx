import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
import LoginPage from "../features/auth/pages/LoginPage";
import { Protected } from "../features/auth/components/Protected";

const AppRoutes = () => {
  return (
    <div className="bg-red-500">
    <Routes>
      <Route path="/" element={<Protected><div>Homepage</div></Protected>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </div>
  );
};

export default AppRoutes;