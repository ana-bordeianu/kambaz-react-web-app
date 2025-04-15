import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Kambaz from "../Kambaz"
export default function Labs() {
return (
	<div id="wd-labs">
		<h1>Labs</h1>
		<h2>Ana Bordeianu</h2>
		<TOC />
		<Routes>
			<Route path="/" element={<Navigate to="Lab1" />} />
			<Route path="Lab1" element={<Lab1 />} />
			<Route path="Lab2" element={<Lab2 />} />
			<Route path="Lab3/*" element={<Lab3 />} />
			<Route path="Lab4/*" element={<Lab4 />} />
			<Route path="Kambaz" element={<Kambaz />} />
			<Route path="GitHub" element={<Navigate to="https://github.com/ana-bordeianu"/>} />
		</Routes>
	</div>
);}
