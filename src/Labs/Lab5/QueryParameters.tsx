import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div>
            <h3>Query Parameters</h3>
            <FormControl id="wd-query-parameter-a"
                className="mb-2"
                defaultValue={a} type="number"
                onChange={(e) => setA(e.target.value)} />
            <FormControl id="wd-query-parameter-b"
                className="mb-2"
                defaultValue={b} type="number"
                onChange={(e) => setB(e.target.value)} />
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>Test Hyperlinks</th>
                        <th>Confirm Response</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a className="btn btn-primary"
                                id="wd-query-parameter-add"
                                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                                Add {a} + {b}
                            </a>
                        </td>
                        <td>{Number(a) + Number(b)}</td>
                    </tr>
                    <tr>
                        <td>
                            <a className="btn btn-danger"
                                id="wd-query-parameter-subtract"
                                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                                Subtract {a} - {b}
                            </a>
                        </td>
                        <td>{Number(a) - Number(b)}</td>
                    </tr>
                    <tr>
                        <td>
                            <a className="btn btn-primary"
                                id="wd-query-parameter-multiply"
                                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
                                Multiply {a} * {b}
                            </a>
                        </td>
                        <td>{Number(a) * Number(b)}</td>
                    </tr>
                    <tr>
                        <td>
                            <a className="btn btn-danger"
                                id="wd-query-parameter-divide"
                                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
                                Divide {a} / {b}
                            </a>
                        </td>
                        <td>{b !== "0" ? (Number(a) / Number(b)).toFixed(2) : "Cannot divide by zero"}</td>
                    </tr>
                </tbody>
            </table>

            <hr />
        </div>
    );}