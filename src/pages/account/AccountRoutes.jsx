import { Routes, Route } from "react-router-dom";
import Logout from "./Logout.jsx";
import AccountPage from "./page/AccountPage.jsx";
import LoginPage from "./login/LoginPage.jsx";
import API from "../../api/API.ts";

export default function AccountRoutes() {
	localStorage.setItem('csrftoken', new API().request('csrf', 'GET')['csrftoken'])

	return (
		<>
			<Routes>
				<Route path={ '' } element={ <AccountPage /> } />
				<Route path={ 'login' } element={ <LoginPage /> } />
				{/*<Route path={ 'reg' } element={} />*/}
				<Route path={ 'logout' } element={ <Logout /> } />
			</Routes>
		</>
)}
