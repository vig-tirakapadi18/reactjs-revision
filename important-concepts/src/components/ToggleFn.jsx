import { useState } from "react";

const ToggleFn = () => {
    const [showName, setShowName] = useState(false);

    return (
        <div>
            <button
                type="button"
                onClick={() => setShowName(!showName)}>
                TOGGLE
            </button>

            {showName && <h3>VIGHNESH!!!</h3>}
        </div>
    );
};

export default ToggleFn;
