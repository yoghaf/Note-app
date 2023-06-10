import { Context } from "../../utils/MyContext";
import { useContext } from "react";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const { route } = useContext(Context);
  return (
    <>
      <Nav route={route} />
      <Outlet />
    </>
  );
}

export default Dashboard;
