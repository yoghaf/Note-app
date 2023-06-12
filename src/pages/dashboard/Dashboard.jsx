import { Context } from "../../utils/MyContext";
import { useContext } from "react";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";
import DarkButton from "../../components/DarkButton";
function Dashboard() {
  const { route } = useContext(Context);
  return (
    <>
      <Nav route={route} />
      <div className="flex justify-center mt-10">
        <DarkButton />
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
