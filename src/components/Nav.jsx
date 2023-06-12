import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../utils/MyContext";
import { useContext } from "react";

const Nav = ({ route }) => {
  const { token, isDark } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  if (!token) {
    return (
      <NavigationMenu.Root className={`w-full  flex justify-center mt-5 `}>
        <NavigationMenu.List className={`border-2 flex p-2 rounded-xl drop-shadow-md ${isDark ? "bg-black" : "bg-white border-gray-300 "}`}>
          {route.noAuth.map((item, index) => {
            return (
              <NavigationMenu.Item className={` flex justify-center rounded-lg mr-1 font-medium ${!isDark ? "hover:bg-slate-500" : "hover:bg-slate-200"}`} key={index}>
                <Link className="p-2" to={item.path}>
                  {item.title}
                </Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    );
  }

  return (
    <NavigationMenu.Root className={`w-full  flex justify-center mt-5 `}>
      <NavigationMenu.List className={`border-2 flex p-2 rounded-xl drop-shadow-md ${isDark ? "bg-black" : "bg-white border-gray-300 "}`}>
        {route.Auth.map((item, index) => {
          return (
            <NavigationMenu.Item className={` flex justify-center rounded-lg mr-1 font-medium ${isDark ? "hover:bg-slate-500" : "hover:bg-slate-200"}`} key={index}>
              <Link className="p-2" to={item.path}>
                {item.title}
              </Link>
            </NavigationMenu.Item>
          );
        })}
        <NavigationMenu.Item className={`flex justify-center  rounded-lg mr-1 font-medium ${isDark ? "hover:bg-slate-500" : "hover:bg-slate-200"}`}>
          <button onClick={handleClick} className="p-2">
            Logout
          </button>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
Nav.propTypes = {
  route: propTypes.object,
};

export default Nav;
