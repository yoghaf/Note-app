import Nav from "../components/Nav";
import { useContext } from "react";
import { Context } from "../utils/MyContext";
import { Outlet } from "react-router-dom";
import DarkButton from "../components/DarkButton";

function LandingPage() {
  const { route } = useContext(Context);

  return (
    <>
      <Nav route={route} />
      <div className="flex justify-center mt-5">
        <DarkButton />
      </div>
      <Outlet />
    </>
  );
}

export default LandingPage;
