import { Link } from "react-router-dom";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Home" ? "active" : ""'> Home </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Modules" ? "active" : ""'> Modules </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Piazza" ? "active" : ""'> Piazza </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Zoom" ? "active" : ""'> Zoom </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Assignments" ? "active" : ""'> Assignments </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/Quizzes" ? "active" : ""'> Quizzes </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className='list-group-item text-danger border border-0 ${location.pathname === "/Kambaz/Courses/1234/People" ? "active" : ""' > People </Link>
    </div>
);}
