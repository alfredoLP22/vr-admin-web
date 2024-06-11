import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const RouteProtected = () => {
  return (
    <>
      <div className="md:flex flex min-h-screen h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-scroll">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RouteProtected;
