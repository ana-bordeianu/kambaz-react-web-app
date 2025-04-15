import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
export default function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    const { sum } = useSelector((state: any) => state.addReducer);
    const dispatch = useDispatch();
    return (
        <div className="w-25" id="wd-add-redux">
            <h1>Add Redux</h1>
            <h2>{a} + {b} = {sum}</h2>
            <FormControl
                component="input"
                type="number"
                defaultValue={a}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setA(parseInt(e.target.value))}
            />
            <FormControl
                component="input" 
                type="number"
                defaultValue={b}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setB(parseInt(e.target.value))}
            />
            <Button id="wd-add-redux-click"
                onClick={() => dispatch(add({ a, b }))}>
            Add Redux
            </Button>
            <hr/>
        </div>
);
}