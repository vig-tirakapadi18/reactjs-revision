import { Fragment, useState } from "react";

const MultipleInputs = () => {
    const [user, setUser] = useState({ name: "", email: "" });

    const inputChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(user);
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
                        value={user.name}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={inputChangeHandler}
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </Fragment>
    );
};

export default MultipleInputs;
