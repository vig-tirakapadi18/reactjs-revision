import { Fragment, useState } from "react";

const DUMMY_DATA = [
    { id: 1, name: "ABC" },
    { id: 2, name: "DEF" },
    { id: 3, name: "GHI" },
    { id: 4, name: "JKL" },
];

const RemoveAndClearItems = () => {
    const [data, setData] = useState(DUMMY_DATA);

    const removeItem = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    const clearItems = () => {
        setData([]);
    };

    const resetHandler = () => {
        setData(DUMMY_DATA);
    };

    return (
        <Fragment>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <span>
                            <h3>{item.name}</h3>
                            <button
                                type="button"
                                onClick={() => removeItem(item.id)}>
                                REMOVE
                            </button>
                        </span>
                    </div>
                );
            })}

            {data.length < 1 ? (
                <button
                    type="button"
                    onClick={resetHandler}>
                    RESET
                </button>
            ) : (
                <button
                    type="button"
                    className="imp-btn"
                    onClick={clearItems}>
                    CLEAR
                </button>
            )}
        </Fragment>
    );
};

export default RemoveAndClearItems;
