import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
    const dispatchActions = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatchActions(authActions.logout());
    };

    return (
        <header className={styles.header}>
            <h1>Redux Auth</h1>
            {isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
