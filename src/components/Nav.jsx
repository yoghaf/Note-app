import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../utils/MyContext";
import { useContext } from "react";

const Nav = ({ route }) => {
  const { token } = useContext(Context);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  if (!token) {
    return (
      <NavigationMenu.Root className="NavigationMenuRoot mt-5">
        <NavigationMenu.List className="NavigationMenuList ">
          {route.noAuth.map((item, index) => {
            return (
              <NavigationMenu.Item key={index}>
                <Link className="NavigationMenuLink" to={item.path}>
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
    <NavigationMenu.Root className="NavigationMenuRoot mt-5">
      <NavigationMenu.List className="NavigationMenuList ">
        {route.Auth.map((item, index) => {
          return (
            <NavigationMenu.Item key={index}>
              <Link className="NavigationMenuLink" to={item.path}>
                {item.title}
              </Link>
            </NavigationMenu.Item>
          );
        })}
        <NavigationMenu.Item>
          <button onClick={handleClick} className="NavigationMenuLink">
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
