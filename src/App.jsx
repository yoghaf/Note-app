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
import ArchivedNotes from "./pages/dashboard/ArchivedNotes";
import DetailNote from "./pages/dashboard/DetailNote";
import NotFound from "./pages/NotFound";

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
          <Route index element={<NoteApp />} />
          <Route path="addnote" element={<AddNote />} />
          <Route path="notes" element={<NoteList />} />
          <Route path="archivednotes" element={<ArchivedNotes />} />
          <Route path="detail/:id" element={<DetailNote />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
