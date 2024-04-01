import { useState } from "react";
import AccountAPI from "../../../api/AccountAPI.ts";
import './login.css'

export default function LoginPage() {
	const next_page = new URLSearchParams(location.search).get("next")

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function submit(e) {
		e.preventDefault()

		if (new AccountAPI().login(username, password) === 200) {
			if (next_page != null) document.location.pathname = next_page
			else document.location.pathname = '/account'
			document.location.search = ""
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