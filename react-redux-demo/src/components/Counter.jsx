import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";

const Counter = () => {
    const dispatchAction = useDispatch();
    const counter = useSelector((state) => state.counter);
    const toggle = useSelector((state) => state.isToggled);

    const toggleCounterHandler = () => {
        dispatchAction({ type: "TOGGLE" });
    };

    const incrementHandler = () => {
        dispatchAction({ type: "INCREMENT" });
    };

    const incrementBy5Handler = () => {
        dispatchAction({ type: "INCREMENT5", payload: { value: 5 } });
    };

    const decrementHandler = () => {
        dispatchAction({ type: "DECREMENT" });
    };

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            {toggle && <div className={styles.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>INCREMENT</button>
                <button onClick={incrementBy5Handler}>INCREMENT BY 5</button>
                <button onClick={decrementHandler}>DECREMENT</button>
            </div>
            <button onClick={toggleCounterHandler}>TOGGLE COUNTER</button>
        </main>
    );
};

export default Counter;
