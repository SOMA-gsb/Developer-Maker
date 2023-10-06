import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Register, Login, Error, TagList } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes className="page">
				<Route path="/" element={<Main />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/taglist" element={<TagList />} />
				<Route path="*" element={<Error errorno={404} />} />
			</Routes>
		</div>
	);
}

export default App;
