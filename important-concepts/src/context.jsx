import { createContext } from "react";

const GlobalContext = createContext();

const AppContext = (props) => {
    <GlobalContext.Provider>Hello</GlobalContext.Provider>;
};

export default AppContext;
