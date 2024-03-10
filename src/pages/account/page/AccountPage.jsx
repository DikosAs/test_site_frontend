import AccountAPI from "../../../api/AccountAPI.ts";
import {Link, Navigate} from "react-router-dom";
import "./account_page.css"

export default function AccountPage() {
	if (new AccountAPI().status() === 401) {
		return <Navigate to={ '/account/login' } replace />
	}

	return (
		<main>
			<nav>
				<Link to={ "/editor/add/test" }>Новый тест</Link>
				<Link to={ "/editor/del/test" }>Удалить</Link>
				<Link to={ "/editor/edit/test" }>Изменить</Link>
			</nav>
			<div id="my__tests">

			</div>
		</main>
	)
}