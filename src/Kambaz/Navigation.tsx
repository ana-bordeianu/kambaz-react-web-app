import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import "./styles.css"; // Import your CSS file

export default function KambazNavigation() {
  const location = useLocation();

  return (
    <div id="wd-kambaz-navigation" style={{ width: 100 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" />
      </a>

      <Link to="/Kambaz/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black ${location.pathname === "/Kambaz/Account" ? "active" : ""}`}>
        <FaRegCircleUser className="fs-1" /><br />
        Account
      </Link>

      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kambaz/Dashboard" ? "active" : ""}`}>
        <AiOutlineDashboard className="fs-1" /><br />
        Dashboard
      </Link>

      <Link to="/Kambaz/Courses" id="wd-course-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kambaz/Courses" ? "active" : ""}`}>
        <LiaBookSolid className="fs-1" /><br />
        Courses
      </Link>

      <Link to="/Kambaz/Calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kambaz/Calendar" ? "active" : ""}`}>
        <IoCalendarOutline className="fs-1" /><br />
        Calendar
      </Link>

      <Link to="/Kambaz/Inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Kambaz/Inbox" ? "active" : ""}`}>
        <FaInbox className="fs-1" /><br />
        Inbox
      </Link>

      <Link to="/Labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 ${location.pathname === "/Labs" ? "active" : ""}`}>
        <LiaCogSolid className="fs-1" /><br />
        Labs
      </Link>
    </div>
  );
}
