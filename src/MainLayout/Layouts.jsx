import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Sidebar from "../Components/Sidebar";
import "./Layouts.css";

const Layouts = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layouts;
