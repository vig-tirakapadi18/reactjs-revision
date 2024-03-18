import { Fragment, createContext } from "react";
import GrandParent from "./GrandParent";

export const ExampleContext = createContext();

const GreatGrandParent = () => {
    return (
        <ExampleContext.Provider value={{ name: "VIG!", age: 23 }}>
            <Fragment>
                Hello from GreatGrandParent!
                <GrandParent />
            </Fragment>
        </ExampleContext.Provider>
    );
};

export default GreatGrandParent;
