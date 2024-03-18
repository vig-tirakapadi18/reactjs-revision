import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const TOGGLE = "TOGGLE";
const INCREMENT5 = "INCREMENT5";

const defaultState = { counter: 0, isToggled: false };

const counterReducer = (state = defaultState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, counter: state.counter + 1 };
    }

    if (action.type === DECREMENT) {
        return { ...state, counter: state.counter - 1 };
    }

    if (action.type === INCREMENT5) {
        return { ...state, counter: state.counter + action.payload.value };
    }

    if (action.type === TOGGLE) {
        return { ...state, isToggled: !state.isToggled }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;