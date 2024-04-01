import { Link } from "react-router-dom";
import './header.css';
import {useEffect} from "react";
import AccountAPI from "../../api/AccountAPI.ts";

export default function Header() {
  useEffect(() => {
    if (parseInt(localStorage.getItem('loginStatus')) === 200) {
      document.getElementById("logout_link").style.display = "block"
    }
  }, []);

  return (
    <header>
      <div className="header__logo">
        {/*<img src={ logo } alt=""/>*/}
        {/*<p>Завьяловский школьный музей</p>*/}
      </div>
      <nav className="header__navbar">
        <Link to={ "/tests_list" } id="test_link">Тесты</Link>
        <Link to={ "/account" } id="account_link">Личный кабинет</Link>
        <Link to={ "/account/logout" } id="logout_link" style={ {display: "none"} }>Выход</Link>
      </nav>
    </header>
  )
}