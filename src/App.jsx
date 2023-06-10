import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoteApp from "./pages/NoteApp";
import Dashboard from "./pages/dashboard/Dashboard";
import { Context } from "./utils/MyContext";
import { useContext } from "react";
function App() {
  const { token } = useContext(Context);

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<NoteApp />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
