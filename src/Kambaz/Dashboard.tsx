import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/1800.jpg" width={200} />
            <div>
              <h5> CS1800 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Computing and Statistical Structures  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/2500.jpg" width={200} />
            <div>
              <h5> CS2500 Fundamentals of Computer Science 1 </h5>
              <p className="wd-dashboard-course-title">
                Dr. Racket Programming </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2510/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/2510.jpg" width={200} />
            <div>
              <h5> CS2510 Fundamentals of Computer Science 2 </h5>
              <p className="wd-dashboard-course-title">
                Basic Java Programming  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/3000.jpg" width={200} />
            <div>
              <h5> CS3000 Algorithms & Data </h5>
              <p className="wd-dashboard-course-title">
                Algorithmic Design and Application  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3200/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/3200.jpg" width={200} />
            <div>
              <h5> CS3200 Database Design </h5>
              <p className="wd-dashboard-course-title">
                Database Creation and Manipulation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/3500.jpg" width={200} />
            <div>
              <h5> CS3500 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Advanced Java Programming  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4120/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/4120.jpg" width={200} />
            <div>
              <h5> CS4120 Natural Language Processing </h5>
              <p className="wd-dashboard-course-title">
                Large Language Models and Machine Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
