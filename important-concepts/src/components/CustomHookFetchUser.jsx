import useFetchUser from "./hooks/useFetchUser";

const CustomHookFetchUser = () => {
    const { isLoading, isError, users } = useFetchUser(
        "https://api.github.com/users"
    );

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

export default CustomHookFetchUser;
