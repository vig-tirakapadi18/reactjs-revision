import { useState } from "react";

const UserLoginLogout = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
            <button
                type="button"
                onClick={() => setUser({ name: "VIG" })}>
                LOGIN
            </button>
            <br />
            <br />
            <button
                type="button"
                onClick={() => setUser(null)}>
                LOGOUT
            </button>

            {user ? <h3>Welcome {user.name}!</h3> : ""}
        </div>
    );
};

export default UserLoginLogout;
