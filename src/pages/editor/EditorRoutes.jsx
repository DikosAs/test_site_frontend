import { Routes, Route } from "react-router-dom";

export default function EditorRoutes() {
	return (
		<>
			<Routes>
				<Route path={ 'add/:obj' } />
				<Route path={ 'del/:obj' } />
				<Route path={ 'edit/:objs' } />
			</Routes>
		</>
	)}
