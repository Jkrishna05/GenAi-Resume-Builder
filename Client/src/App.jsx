import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { AuthProvider } from "./features/auth/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;