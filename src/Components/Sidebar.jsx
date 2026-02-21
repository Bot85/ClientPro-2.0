import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaQuestionCircle, FaChartBar, FaUser } from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" end>
            <FaHome className="icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Courses">
            <FaBook className="icon" /> Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/Quiz">
            <FaQuestionCircle className="icon" /> Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="/Progress">
            <FaChartBar className="icon" /> Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/Profile">
            <FaUser className="icon" /> Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
