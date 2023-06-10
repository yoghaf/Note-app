import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoteApp from "./pages/NoteApp";

function App() {
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

export default App;
