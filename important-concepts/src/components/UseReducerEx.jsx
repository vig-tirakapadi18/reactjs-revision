import { Fragment, useReducer } from "react";

const DUMMY_DATA = [
    { id: 1, name: "ABC" },
    { id: 2, name: "DEF" },
    { id: 3, name: "GHI" },
    { id: 4, name: "JKL" },
];

const defaultState = {
    data: DUMMY_DATA,
    isLoading: false,
};

const CLEAR = "CLEAR";
const RESET = "RESET";
const REMOVE = "REMOVE";

const reducerFn = (state, action) => {
    if (action.type === CLEAR) {
        return { ...state, data: [] };
    }

    if (action.type === RESET) {
        return { ...state, data: DUMMY_DATA };
    }

    if (action.type === REMOVE) {
        const newData = state.data.filter(
            (item) => item.id !== action.payload.id
        );

        return { ...state, data: newData };
    }

    // return state; // If it doesn't matches any if-conditions
    throw new Error(`No matching "${action.type} - action type"`);
};

const UseReducerEx = () => {
    const [state, dispatch] = useReducer(reducerFn, defaultState);

    // const [data, setData] = useState(DUMMY_DATA);

    const removeItem = (id) => {
        dispatch({ type: REMOVE, payload: { id } });
        // const newData = data.filter((item) => item.id !== id);
        // setData(newData);
    };

    const clearItems = () => {
        dispatch({ type: CLEAR });
        // setData([]);
    };

    const resetHandler = () => {
        dispatch({ type: RESET });
        // setData(DUMMY_DATA);
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

export default UseReducerEx;
