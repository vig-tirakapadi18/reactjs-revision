import { useEffect } from "react";
import { useState } from "react";

const useFetchUser = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }

                const users = await res.json();
                setIsError(false);
                setUser(users);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }

            setIsLoading(false);
        };
        fetchUsers();
    }, [url]);

    return { isLoading, isError, user };
};

export default useFetchUser;