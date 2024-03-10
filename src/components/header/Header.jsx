import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        {/*<img src={ logo } alt=""/>*/}
        {/*<p>Завьяловский школьный музей</p>*/}
      </div>
      <nav className="header__navbar">
        <Link to={"/tests"}>Тесты</Link>
        <Link to={"/account"}>Личный кабинет</Link>
      </nav>
    </header>
  )
}