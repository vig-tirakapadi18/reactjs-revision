/* eslint-disable no-unused-vars */
import { useState } from "react";

const ShortCircuitEval = () => {
    // Falsy
    const [text, setText] = useState("");
    // Truthy
    const [name, setName] = useState("VIG");

    return (
        <div>
            <h3>Falsy OR: {text || "Hello!"}</h3> {/* "Hello!" */}
            <h3>Falsy AND: {text && "Hello!"}</h3> {/* "" */}
            <h3>Truthy OR: {name || "Hello!"}</h3> {/* "VIG" */}
            <h3>Truthy AND: {name && "Hello!"}</h3> {/* "Hello!" */}
        </div>
    );
};

export default ShortCircuitEval;
