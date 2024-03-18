import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
    const dispatchAction = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const toggle = useSelector((state) => state.counter.isToggled);

    const toggleCounterHandler = () => {
        dispatchAction(counterActions.toggleCounter());
    };

    const incrementHandler = () => {
        // dispatchAction({ type: "INCREMENT" });
        dispatchAction(counterActions.increment());
    };

    const incrementBy5Handler = () => {
        // dispatchAction({ type: "INCREMENT5", payload: { value: 5 } });
        dispatchAction(counterActions.incrementBy5({ value: 5 }));
    };

    const decrementHandler = () => {
        dispatchAction(counterActions.decrement());
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
