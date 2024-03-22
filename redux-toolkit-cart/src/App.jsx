import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui";
import Notification from "./components/UI/Notification";

let isInitial = true;

const App = () => {
    const isCartVisible = useSelector((state) => state.ui.isCartVisible);
    const cart = useSelector((state) => state.cart);
    const dispatchActions = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatchActions(
                uiActions.showNotification({
                    status: "sending",
                    title: "Sending...",
                    message: "Sending the cart data!",
                })
            );
            const resp = fetch(
                "https://books-data-10a93-default-rtdb.asia-southeast1.firebasedatabase.app/reduxCart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!resp.ok) {
                throw new Error("Sending cart data failed!");
            }
        };

        dispatchActions(
            uiActions.showNotification({
                status: "success",
                title: "Success!",
                message: "Sent cart data successfully!",
            })
        );

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch(() => {
            dispatchActions(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        });
    }, [cart, dispatchActions]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {isCartVisible && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
};

export default App;
