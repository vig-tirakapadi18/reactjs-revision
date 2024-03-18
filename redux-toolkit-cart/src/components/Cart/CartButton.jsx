import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
    const dispatchActions = useDispatch();
    const cartQty = useSelector((state) => state.cart.totalQty);

    const toggleCartHandler = () => {
        dispatchActions(uiActions.toggle());
    };

    return (
        <button
            className={classes.button}
            onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQty}</span>
        </button>
    );
};

export default CartButton;
