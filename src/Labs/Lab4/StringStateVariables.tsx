import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function StringStateVariables() {
    const [firstName, setFirstName] = useState("John Doe");
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <TextField
            defaultValue={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />
            <hr/>
        </div>
);}