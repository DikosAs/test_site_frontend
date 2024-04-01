import API from "./API";

interface answers
{
  [key: number|string]: number|{
    [key: number]: boolean
  }
}

export default class DataAPI extends API
{
  constructor()
  {
    super()
    this.url = this.url + "data/"
  }

  get_tests(page: number|null): {}
  {
    return this.request("get_tests/", "GET", (page == null) ? null: {"page": page})
  }

  get_test_data(test_id: number): { [key: string]: any }|null
  {
    let req = this.request(`get_test_data/${test_id}`, "GET")

    if (typeof req != "object") return null

    return req
  }

  get_my_tests(): Array<object>
  {
    return this.request("get_my_tests/", "GET")['tests']
  }

  post_answers(answer: string, test_id: number): void
  {
    const params: object = {
      "answer": answer,
      "test_id": test_id
    }
    this.request("post_answers", "POST", params)
  }

  check_answers(): Array<object>
  {
    return this.request("check_answers", "GET")["true_answers"]
  }
}