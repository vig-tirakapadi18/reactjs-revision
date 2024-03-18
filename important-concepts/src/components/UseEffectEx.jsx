import { useCallback, useEffect, useState } from "react";

const UseEffectEx = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        try {
            const res = await fetch("https://api.github.com/users");

            if (!res.ok) {
                setIsError(true);
                setIsLoading(false);
                return;
            }

            const users = await res.json();
            setIsError(false);
            setUsers(users);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error fetching data!</h1>;

    return (
        <div>
            <h3>GitHub Users</h3>
            {users.map((user) => {
                const { id, login, avatar_url, url } = user;
                return (
                    <div
                        key={id}
                        className="profile">
                        <img
                            src={avatar_url}
                            alt={login}
                        />

                        <p className="profile-name">
                            {login}{" "}
                            <span>
                                <a href={url}>Go to Profile</a>
                            </span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default UseEffectEx;
