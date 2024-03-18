import { CLEAR, REMOVE, RESET } from "./actions";

export const DUMMY_DATA = [
    { id: 1, name: "ABC" },
    { id: 2, name: "DEF" },
    { id: 3, name: "GHI" },
    { id: 4, name: "JKL" },
];

export const reducerFn = (state, action) => {
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