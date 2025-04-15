import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 2,  name: "Module 1",
        description: "Building React User Interfaces with HTML",
        course: "CS4550", score: 0, completed: false,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr/>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`} target="_blank">
                Update Title
                </a>
            <FormControl className="w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />
            <h3>Modifying Properties DIY</h3>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr/>
            
            <h4>Modifying Properties</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`} target="_blank">
                Update Name
                </a>
            <FormControl className="w-75" id="wd-module-title"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })}/>
            <hr />

            <a id="wd-update-module-score"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/score/${encodeURIComponent(module.score)}`} target="_blank">
                Update Score
                </a>
            <FormControl className="w-25" id="wd-module-score" type="number"
                value={module.score} onChange={(e) =>
                    setModule({ ...module, score: parseInt(e.target.value) })}/>
            <hr />

            <a id="wd-update-module-completed"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/completed/${module.completed ? "true" : "false"}`} target="_blank">
                Update Assignment Status
                </a>
            <div className="form-check w-25">
                <input type="checkbox" className="form-check-input" id="wd-module-completed"
                    checked={module.completed} onChange={(e) =>
                        setModule({ ...module, completed: e.target.checked })}/>
                <label className="form-check-label" htmlFor="wd-module-completed">
                    Module Completed
                </label>
            </div><hr />

            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`} target="_blank">
                Update Description
                </a>
            <FormControl className="w-75" id="wd-module-description"
                value={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })}/>
            <hr />
            
            
                
        </div>
);}