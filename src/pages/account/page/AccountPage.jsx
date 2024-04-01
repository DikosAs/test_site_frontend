import {Navigate} from "react-router-dom";
import TestObject from "../../../components/page/account_page/TestObject.jsx";
import DataAPI from "../../../api/DataAPI.ts";
import "./account_page.css"

export default function AccountPage() {
	if (parseInt(localStorage.getItem('loginStatus')) === 401) return <Navigate to={ '/account/login' } replace />

	let MyTests = new DataAPI().get_my_tests()

	const edit_test = (e, id) => {
		window.open(`/edit/${id}`, 'popupWindow', 'width=600,height=400')
	}

	return (
		<main id="account_page">
			<nav>
				<button>Новый тест</button>
				<button>Удалить</button>
			</nav>
			<div id="my__tests">
				{
					MyTests.map((test) => (
						<button onClick={ (e) => edit_test(e, test.id) }>
							<TestObject
								name={ test.name }
								created_time={ test.created_time }
								watched={ test.watched }
								likes={ test.likes }
							/>
						</button>
					))
				}
			</div>
		</main>
	)
}