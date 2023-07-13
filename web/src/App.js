import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Error, Register } from ".";

function App() {
	return (
		<div className="App">
			<Routes className="page">
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Error errorno={404} />} />
			</Routes>
		</div>
	);
}

export default App;
