import { useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import { authActions } from "../store/auth";

const Auth = () => {
    const dispatchActions = useDispatch();

    const loginHandler = (e) => {
        e.preventDefault();

        dispatchActions(authActions.login());
    };

    return (
        <main className={styles.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                        />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
