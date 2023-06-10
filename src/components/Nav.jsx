import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Nav = ({ route }) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot mt-5">
      <NavigationMenu.List className="NavigationMenuList">
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
};
Nav.propTypes = {
  route: propTypes.object,
};

export default Nav;
