import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <TextField
            defaultValue={person.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person, name: e.target.value })}
            />
            <TextField
            defaultValue={person.age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPerson({ ...person,
            age: parseInt(e.target.value) })}
            />
            <hr/>
        </div>
);
}