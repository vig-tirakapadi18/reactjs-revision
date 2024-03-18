import useToggle from "./hooks/useToggle";

const CustomHookToggleEx = () => {
    const { show, toggle } = useToggle(false);

    return (
        <div>
            {show && <h1>VIG!</h1>}
            <button
                type="button"
                onClick={toggle}>
                TOGGLE
            </button>
        </div>
    );
};

export default CustomHookToggleEx;
