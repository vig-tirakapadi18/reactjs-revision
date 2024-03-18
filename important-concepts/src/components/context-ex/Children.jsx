import { Fragment, useContext } from "react";
import { ExampleContext } from "./GreatGrandParent";

const Children = () => {
    const exCtx = useContext(ExampleContext);

    return (
        <Fragment>
            Hello from Children!
            <hr />
            <div>
                Data from GreatGrandParent:{" "}
                {`Name: ${exCtx.name} & Age: ${exCtx.age}`}
            </div>
        </Fragment>
    );
};

export default Children;
