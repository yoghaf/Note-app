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
    auth: [
      {
        path: "dashboard",
        title: "Dashboard",
      },
      {
        path: "addnote",
        title: "Add Note",
      },
      {
        path: "logout",
        title: "Logout",
      },
    ],
  };
  const url = import.meta.env.VITE_APP_BASE_URL;
  const Register = async (datas) => {
    try {
      const response = await axios.post(`${url}/register`, datas);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return <Context.Provider value={{ route, Register }}>{children}</Context.Provider>;
};
Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export { Context, Provider };
