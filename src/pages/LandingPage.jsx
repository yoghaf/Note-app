import Nav from "../components/Nav";
import { useContext } from "react";
import { Context } from "../utils/MyContext";
import { Outlet } from "react-router-dom";
function LandingPage() {
  const { route } = useContext(Context);

  return (
    <>
      <Nav route={route} />
      <Outlet />
    </>
  );
}

export default LandingPage;
