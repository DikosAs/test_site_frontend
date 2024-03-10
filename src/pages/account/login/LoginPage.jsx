import { useState } from "react";
import { Navigate } from "react-router-dom";
import AccountAPI from "../../../api/AccountAPI.ts";
import './login.css'

export default function LoginPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function submit(e) {
		e.preventDefault()

		if (new AccountAPI().login(username, password) === 200) {
			document.location.pathname = '/account'
		}
	}
	
	return (
		<main id={ 'login' }>
			<form onSubmit={ submit }>
				<div id="username">
					<label htmlFor="username">Логин:</label>
					<input
						type="text"
						name="username"
						required
						value={ username }
						onChange={ (e) => setUsername(e.target.value) }
					/>
				</div>
				<div id="password">
					<label htmlFor="password">Пароль:</label>
					<input
						type="password"
						name="password"
						required
						value={ password }
						onChange={ (e) => setPassword(e.target.value) }
					/>
				</div>
				<input
					type="submit"
					id="submit"
				/>
			</form>
		</main>
	)
}