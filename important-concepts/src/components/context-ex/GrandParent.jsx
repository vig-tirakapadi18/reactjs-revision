import Parent from "./Parent";

const GrandParent = () => {
    return (
        <div>
            Hello from GrandParent!
            <Parent />
        </div>
    );
};

export default GrandParent;
