import { createContext } from "react";
import propTypes from "prop-types";
import axios from "axios";
const Context = createContext();

const Provider = ({ children }) => {
  const route = {
    noAuth: [
      {
        path: "/",
        title: "Note App",
      },
      {
        path: "/login",
        title: "Login",
      },
      {
        path: "/register",
        title: "Register",
      },
    ],
    Auth: [
      {
        path: "/dashboard/",
        title: "Dashboard",
      },
      {
        path: "addnote",
        title: "Add Note",
      },
      {
        path: "notes",
        title: "List Notes",
      },
      {
        path: "archivednotes",
        title: "Archived Notes",
      },
    ],
  };
  const url = import.meta.env.VITE_APP_BASE_URL;
  //register
  const Register = async (datas) => {
    try {
      const response = await axios.post(`${url}/register`, datas);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  //login

  const Login = async (datas) => {
    try {
      const response = await axios.post(`${url}/login`, datas);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const token = localStorage.getItem("token");
  // getuser
  const GetUser = async (token) => {
    try {
      const response = await axios.get(`${url}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // getnotes
  const GetNotes = async (token) => {
    try {
      const response = await axios.get(`${url}/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  //getsinglenote
  const GetSingleNote = async (token, id) => {
    try {
      const response = await axios.get(`${url}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  //addnotes
  const AddNotes = async (token, datas) => {
    try {
      const response = await axios.post(`${url}/notes`, datas, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // archive notes
  const ArchivedNotes = async (token) => {
    try {
      const response = await axios.get(`${url}/notes/archived`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // ArchiveNote
  const ArchiveNote = async (token, id) => {
    try {
      const response = await axios.post(`${url}/notes/${id}/archive`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  // delete note
  const DeleteNote = async (token, id) => {
    try {
      const response = await axios.delete(`${url}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return <Context.Provider value={{ route, Register, Login, token, GetUser, GetNotes, GetSingleNote, AddNotes, ArchivedNotes, ArchiveNote, DeleteNote }}>{children}</Context.Provider>;
};
Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export { Context, Provider };
