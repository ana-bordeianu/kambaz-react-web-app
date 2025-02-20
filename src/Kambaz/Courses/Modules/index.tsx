export default function Modules() {
	return (
		<div>
			<button>Collapse All</button> 
			<button>View Progress</button>
			<select id="wd-select-one-genre">
               			<option value="NONE">Publish None</option>
              			 <option value="ONE">Publish One</option>
              			 <option selected value="ALL">
                  			 Publish All</option>
            		</select>
			<button>+ Module</button>
			<ul id="wd-modules">
				<li className="wd-module">
					<div className="wd-title">Week 1</div>
					<ul className="wd-lessons">
						<li className="wd-lesson">
							<span className="wd-title">LEARNING OBJECTIVES</span>
							<ul className="wd-content">
								<li className="wd-content-item">Introduction to the course</li>
								<li className="wd-content-item">Learn what is Web Development</li>
							</ul>
							<span className="wd-title">READING</span>
							<ul className="wd-content">
								<li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
							</ul>
							<span className="wd-title">SLIDES</span>
							<ul className="wd-content">
								<li className="wd-content-item">Kanbas Web App on Netlify Links to an external site.</li>
								<li className="wd-content-item">Implementing the Kambaz Assignments Screens</li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="wd-module">
					<div className="wd-title">Week 2</div>
					<ul className="wd-lessons">
						<li className="wd-lesson">
							<span className="wd-title">LEARNING OBJECTIVES</span>
							<ul className="wd-content">
								<li className="wd-content-item">Introduction to CSS</li>
								<li className="wd-content-item">Styling Basics</li>
							</ul>
							<span className="wd-title">READING</span>
							<ul className="wd-content">
								<li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 2 - Styling Web Pages with CSS</li>
							</ul>
							<span className="wd-title">SLIDES</span>
							<ul className="wd-content">
								<li className="wd-content-item">Introduction to Cascading Style Sheets</li>
								<li className="wd-content-item">The Box Model</li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="wd-module">
					<div className="wd-title">Week 3</div>
					<ul className="wd-lessons">
						<li className="wd-lesson">
							<span className="wd-title">LEARNING OBJECTIVES</span>
							<ul className="wd-content">
								<li className="wd-content-item">CSS Libraries: Bootstrap, Tailwind</li>
								<li className="wd-content-item">Float and grid systems</li>
							</ul>
							<span className="wd-title">READING</span>
							<ul className="wd-content">
								<li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 2 - Styling Web Pages with CSS</li>
							</ul>
							<span className="wd-title">SLIDES</span>
							<ul className="wd-content">
								<li className="wd-content-item">Introduction to Bootstrap</li>
								<li className="wd-content-item">Showing and Hiding Content with Bootstrap</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
);}
