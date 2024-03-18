import { Fragment, useRef } from "react";

const UseRefInputs = () => {
    const nameRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        console.log(name);
    };

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={nameRef}
                    />
                </div>

                <button type="submit">SUBMIT</button>
            </form>
        </Fragment>
    );
};

export default UseRefInputs;
