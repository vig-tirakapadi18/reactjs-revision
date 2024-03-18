import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isToggled: false };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter = state.counter + action.payload.value;
        },
        toggleCounter(state) {
            state.isToggled = !state.isToggled;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;