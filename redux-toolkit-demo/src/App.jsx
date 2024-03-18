import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <Fragment>
            <Header />
            {isAuthenticated ? <UserProfile /> : <Auth />}
            <Counter />
        </Fragment>
    );
};

export default App;
