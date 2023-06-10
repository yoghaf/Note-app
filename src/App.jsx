import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoteApp from "./pages/NoteApp";
import Dashboard from "./pages/dashboard/Dashboard";
import { Context } from "./utils/MyContext";
import { useContext } from "react";
import NoteList from "./pages/dashboard/NoteList";
import AddNote from "./pages/dashboard/AddNote";

function App() {
  const { token } = useContext(Context);

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<NoteApp />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<NoteList />} />
          <Route path="addnote" element={<AddNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
