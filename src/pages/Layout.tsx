import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components";

export const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-start border-bottom">
          <button
            className="btn btn-primary start-0 m-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>

        <SideBar isOpen={isSidebarOpen} />

        <div
          className={`border-start pt-2 ${isSidebarOpen ? "col-9" : "col-12"}`}
          style={{ transition: "margin-left 0.3s ease-in-out" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
