import { useState } from "react";
import "./index.css"; // Make sure this path matches your folder structure

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (index: number) => {
        setArray(array.filter((_, i) => i !== index));
    };

    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} id="wd-add-element">Add Element</button>
            <div className="array-list">
                {array.map((item, index) => (
                    <div key={index} className="array-row">
                        <div className="array-item">{item}</div>
                        <div>
                            <button
                                onClick={() => deleteElement(index)}
                                className="delete-button"
                                id={`wd-delete-element-${index}`}
                            >Delete</button>
                        </div></div>))}
            </div>
            <hr />
        </div>
    );
}
