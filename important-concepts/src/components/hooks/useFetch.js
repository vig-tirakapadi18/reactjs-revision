import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }

                const data = await res.json();
                setIsError(false);
                setData(data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }

            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return { isLoading, isError, data };
};

export default useFetch;