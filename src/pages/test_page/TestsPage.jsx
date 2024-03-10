import { useParams } from "react-router-dom";
import DataAPI from "../../api/DataAPI.ts";

export default function TestsPage() {
	let tests_list = new DataAPI().get_tests((useParams().page == null) ? 1: useParams().page)
	const tests_map = tests_list

	return (
		<main>
			{ tests_list }
		</main>
	)
}