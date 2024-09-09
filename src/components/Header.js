import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userAuthActions } from "../store";

const Header = () => {
  const dispatchFunction = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  const logOutHandler = () => {
    dispatchFunction(userAuthActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="/">Мои Продажи</a>
            </li>
          )}
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <button onClick={logOutHandler}>Выйти</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
