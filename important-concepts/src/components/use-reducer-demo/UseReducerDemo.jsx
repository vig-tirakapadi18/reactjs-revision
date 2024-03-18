import { Fragment, useReducer } from "react";
import { CLEAR, REMOVE, RESET } from "./actions";
import { DUMMY_DATA, reducerFn } from "./reducer";

const defaultState = {
    data: DUMMY_DATA,
    isLoading: false,
};

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducerFn, defaultState);

    const removeItem = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
    };

    const clearItems = () => {
        dispatch({ type: CLEAR });
    };

    const resetHandler = () => {
        dispatch({ type: RESET });
    };

    return (
        <Fragment>
            {state.data.map((item) => {
                return (
                    <div key={item.id}>
                        <span>
                            <h3>{item.name}</h3>
                            <button
                                type="button"
                                onClick={() => removeItem(item.id)}>
                                REMOVE
                            </button>
                        </span>
                    </div>
                );
            })}

            {state.data.length < 1 ? (
                <button
                    type="button"
                    onClick={resetHandler}>
                    RESET
                </button>
            ) : (
                <button
                    type="button"
                    className="imp-btn"
                    onClick={clearItems}>
                    CLEAR
                </button>
            )}
        </Fragment>
    );
};

export default UseReducerDemo;
