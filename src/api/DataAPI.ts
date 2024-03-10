import API from "./API";


export default class DataAPI extends API {
  constructor() {
    super()
    this.url = this.url + "data/"
  }

  get_tests(page: number|null): Array<any> {
    return this.request("tests", "GET", (page == null) ? null: {"page": page})['tests']
  }

  get_my_tests(): Array<any> {
    return this.request("my_tests", "GET")['tests']
  }
}