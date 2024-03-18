import { Fragment, useState } from "react";

const USERS = [
    { id: 1, name: "ABC", email: "abc@gmail.com" },
    { id: 2, name: "DEF", email: "def@gmail.com" },
    { id: 3, name: "GHI", email: "ghi@gmail.com" },
    { id: 4, name: "JKL", email: "jkl@gmail.com" },
];

const ControlledInputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState(USERS);

    const submitHandler = (event) => {
        event.preventDefault();
        USERS.push({ name, email });
        const fakeId = Date.now();
        const newUser = { id: fakeId, name, email };
        const updatedUsersList = [...users, newUser];
        setUsers(updatedUsersList);
        setName("");
        setEmail("");
    };

    const removeUserHandler = (id) => {
        const updatedUsersList = users.filter((user) => user.id !== id);
        setUsers(updatedUsersList);
    };

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name=""
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name=""
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <button type="submit">SUBMIT</button>
            </form>

            <h3>All USERS</h3>
            {users.map((user) => (
                <div key={user.id}>
                    <p>
                        {user.name} - ({user.email})
                        <span>
                            <button
                                type="button"
                                className="btn-danger"
                                onClick={() => removeUserHandler(user.id)}>
                                REMOVE
                            </button>
                        </span>
                    </p>
                </div>
            ))}
        </Fragment>
    );
};

export default ControlledInputs;
